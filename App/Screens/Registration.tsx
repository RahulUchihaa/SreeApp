import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {FormTextInput} from '../Components/formInput';
import {registerUser} from '../Helpers/Api';
import {
  COLORS,
  FORM_INPUT_RULES,
  INPUT_FIELD_NAME,
  INPUT_PLACE_HOLDER_CONSTANTS,
  ScreenNames,
  stringConstants,
} from '../Helpers/Constants';
import {Registrationstyles} from '../Helpers/GlobalStyles';
import {setUser} from '../redux/UserSlice';
import fireStore from '@react-native-firebase/firestore';

type registration = {
  navigation: any;
};

const Registration: React.FC<registration> = ({navigation}) => {
  const {control, formState, handleSubmit, getValues} = useForm();
  const [loading, setLoading] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    setLoading(true);
    let user = {
      full_name: data.fullname,
      email: data.email,
      phone_number: data.phoneNumber,
      is_consumer: toggleCheckBox,
    };

    const docRef = await fireStore()
      .collection('Users')
      .add({...user});
    const docSnapshot = await docRef.get();
    const Reponsedata = docSnapshot.data();
    console.log('Stored data:', Reponsedata);
  
    if(Reponsedata){
      let ddata ={
        full_name: Reponsedata.full_name,
        email: Reponsedata.email,
        phone_number: Reponsedata.phone_number,
        is_consumer: Reponsedata.is_consumer,
      }
      dispatch(setUser(ddata))
      const confirmation = await auth().signInWithPhoneNumber("+91" + data.phoneNumber.toString());
      console.log("thhihfs",confirmation)

      if(confirmation){
        navigation.navigate(ScreenNames.OTPScreen,{phone:data.phoneNumber,confirm:confirmation});
    }
    }else{
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: "Error while creating an user",
      });
    }
  };
  return (
    <View style={Registrationstyles.container}>
      <Text style={Registrationstyles.Heading}>Let's Start!</Text>
      <View style={Registrationstyles.secondContainer}>
        <Text style={Registrationstyles.SubHeading}>Sign up</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FormTextInput
            inputName={INPUT_FIELD_NAME.Full_NAME}
            control={control}
            formState={formState}
            defaultValue={stringConstants.EMPTY}
            rules={FORM_INPUT_RULES.fullnameRule}
            placeholder={INPUT_PLACE_HOLDER_CONSTANTS.Full_NAME}
            returnKeyType="next"
          />
          <FormTextInput
            inputName={INPUT_FIELD_NAME.PHONE_NUMBER}
            control={control}
            formState={formState}
            defaultValue={stringConstants.EMPTY}
            rules={FORM_INPUT_RULES.phoneNumberRule}
            placeholder={INPUT_PLACE_HOLDER_CONSTANTS.PHONE_NUMBER}
            returnKeyType="next"
          />
          <FormTextInput
            inputName={INPUT_FIELD_NAME.EMAIL}
            control={control}
            formState={formState}
            defaultValue={stringConstants.EMPTY}
            rules={FORM_INPUT_RULES.emailAddressRule}
            placeholder={INPUT_PLACE_HOLDER_CONSTANTS.EMAIL}
            returnKeyType="next"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 30,
          }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            tintColor="#6b62ff"
            tintColors={{true: COLORS.theme, false: '#3d3d3d'}}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={Registrationstyles.login}> Register as Producer?</Text>
        </View>
        <View style={Registrationstyles.buttonContainer}>
          <TouchableOpacity
            style={Registrationstyles.signupButton}
            onPress={handleSubmit(onSubmit)}>
            <Text style={Registrationstyles.signupButtonText}>
              {loading ? 'Submitting...' : 'Submit'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenNames.LoginScreen)}>
            <Text style={Registrationstyles.login}>
              Already Have an account!{' '}
              <Text style={Registrationstyles.loginText}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Registration;
