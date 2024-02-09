import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import ArrowLeftIcon from '../Components/ArrowLeftIcon';
import { FormTextInput } from '../Components/formInput';
import {
  COLORS,
  FORM_INPUT_RULES,
  INPUT_FIELD_NAME,
  INPUT_PLACE_HOLDER_CONSTANTS,
  ScreenNames,
  stringConstants
} from '../Helpers/Constants';
import { Loginstyles } from '../Helpers/GlobalStyles';
import { loginUser } from '../Helpers/Api';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/UserSlice';
import Toast from 'react-native-toast-message';

type Login = {
  navigation: any;
};

const Login: React.FC<Login> = ({navigation}) => {
  const {control, formState, handleSubmit, getValues} = useForm();
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch()

  const onSubmit = async(data:any) => {
    setLoading(true);
    let userData ={
      mobile: data.phoneNumber
    }
    const response = await loginUser(userData);
    if(response.data.usersdata){
      dispatch(setUser(response.data['usersdata']))
      const confirmation = await auth().signInWithPhoneNumber("+91" + data.phoneNumber.toString());
      if(confirmation){
        navigation.navigate(ScreenNames.OTPScreen,{phone:data.phoneNumber,confirm:confirmation});
      }
    }else{
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: response.data.message,
      });
    }
  };
  return (
    <View style={Loginstyles.container}>
      <View style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <ArrowLeftIcon />
        </TouchableOpacity>
      </View>
      <Text style={Loginstyles.Heading}>Welcome Back!</Text>
      <View style={Loginstyles.secondContainer}>
        <Text style={Loginstyles.SubHeading}>Sign in</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FormTextInput
            inputName={INPUT_FIELD_NAME.PHONE_NUMBER}
            control={control}
            formState={formState}
            defaultValue={stringConstants.EMPTY}
            rules={FORM_INPUT_RULES.phoneNumberRule}
            placeholder={INPUT_PLACE_HOLDER_CONSTANTS.PHONE_NUMBER}
            returnKeyType="next"
          />
        </View>

        <View style={Loginstyles.buttonContainer}>
          <TouchableOpacity
            style={Loginstyles.signupButton}
            onPress={handleSubmit(onSubmit)}>
              {loading ?  
              <ActivityIndicator color={COLORS.RedText} />  :  <Text style={Loginstyles.signupButtonText}>Login</Text>   }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
