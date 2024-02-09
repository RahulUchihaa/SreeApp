import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { COLORS, ScreenNames } from '../Helpers/Constants';
import ArrowLeftIcon from '../Components/ArrowLeftIcon';
import { OTPstyles } from '../Helpers/GlobalStyles';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';

type OTP = {
  navigation: any;
  route: any;
};

const OTP: React.FC<OTP> = ({ navigation, route }) => {
  
  const { phone } = route.params;
  const { confirm } = route.params;
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const otpInputs = useRef<Array<TextInput | null>>(Array(6).fill(null));
  const [replacedText, setReplacedtext] = useState('');
  
  const [resendButtonDisableTime, setResendButtonDisableTime] = useState(30);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (resendButtonDisableTime > 0) {
        setTimeout(() => setResendButtonDisableTime(resendButtonDisableTime - 1), 1000);
      }
      const replaced = phone.toString().replace(/(?<=\d{0,7})\d(?=\d{3})/g, '*');
      setReplacedtext(replaced);
    }

    return () => {
      mounted = false;
    };
  }, [resendButtonDisableTime]);

  const onAuthStateChanged = async (userAuth: any) => {
    if (!userAuth) {
      return;
    }
    if (userAuth) {
      navigation.navigate(ScreenNames.BottomTabScreen);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      subscriber;
    };
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    if (isNaN(Number(value)) || value.length > 1) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);
    setIsIncorrect(false);
    if (value.length === 1 && index < otp.length - 1 && otpInputs.current[index + 1]) {
      otpInputs.current[index + 1]?.focus();
    } else if (value.length === 0 && index > 0 && otpInputs.current[index - 1]) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = async() =>{
    const confirmation = await auth().signInWithPhoneNumber("+91" + phone.phoneNumber.toString());
  }

  const onSubmit = async () => {
    setLoading(true)
    const enteredOtp = otp.join('');
    try {
      await confirm.confirm(enteredOtp);
    } catch (error) {
      setLoading(false)
      console.log('Invalid code.');
    }
  };

  return (
    <View style={OTPstyles.container}>
      <View style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <ArrowLeftIcon />
        </TouchableOpacity>
      </View>
      <View style={OTPstyles.secondContainer}>
        <Text style={OTPstyles.SubHeading}>Code Verification</Text>
        <Text style={OTPstyles.subheading2}>
          Please enter the code sent to {replacedText}
        </Text>
        <View style={OTPstyles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[
                OTPstyles.otpInput,
                isIncorrect && { borderColor: 'red' },
              ]}
              value={digit}
              onChangeText={(value) => handleOtpChange(index, value)}
              maxLength={1}
              keyboardType="numeric"
              ref={(input) => (otpInputs.current[index] = input)}
              onSubmitEditing={() => {
                if (index === otp.length - 1) {
                  onSubmit();
                }
              }}
            />
          ))}
        </View>
        {isIncorrect && (
          <Text
            style={{
              color: 'red',
              textAlign: 'center',
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Please enter the correct OTP{' '}
          </Text>
        )}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={[
              OTPstyles.signupButton,
              {
                backgroundColor: loading ? '#b7b7a4' : COLORS.theme,
                marginTop: 40,
              },
            ]}
            onPress={onSubmit}>
            {loading ? (
              <ActivityIndicator style={{ marginVertical: 15 }} />
            ) : (
              <Text
                style={{
                  textAlign: 'center',
                  marginVertical: 15,
                  fontFamily: 'Montserrat-Regular',
                  color: '#8b3740',
                  fontSize: 15,
                }}>
                Verify
              </Text>
            )}
          </TouchableOpacity>

          <View>
            <Text style={[OTPstyles.subheading, { marginTop: 40 }]}>
              Trouble Getting OTP?
            </Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20 }}>
            <Text>{'\u2022'}</Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 15,
                width: '90%',
              }}>
              Make sure to enter the correct phone number
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 20,
              marginLeft: 20,
              width: '90%',
            }}>
            <Text style={{ marginLeft: 4 }}>{'\u2022'}</Text>
            {resendButtonDisableTime ? (
              <Text style={OTPstyles.resendCodeText}>
                Resend OTP in {resendButtonDisableTime} sec
              </Text>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setResendButtonDisableTime(30);
                  handleResendOTP;
                }}>
                <View style={OTPstyles.resendCodeContainer}>
                  <Text style={OTPstyles.resendCode}> Resend OTP</Text>
                  <Text> in {resendButtonDisableTime} sec</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default OTP;

