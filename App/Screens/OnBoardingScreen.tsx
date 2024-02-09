import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ScreenNames } from '../Helpers/Constants';
import { OnBoardingstyles } from '../Helpers/GlobalStyles';

type onBoarding = {
    navigation:any
}
const OnBoardingScreen:React.FC<onBoarding> = ({navigation}) => {
  return (
    <View style={OnBoardingstyles.container}>
      <ScrollView contentContainerStyle={OnBoardingstyles.scrollContainer}>
        <Image
          source={require('../assets/Onboarding.jpg')}
          style={OnBoardingstyles.image}
        />
        <Text style={OnBoardingstyles.welcomeText}> Welcome </Text>
        <Text style={OnBoardingstyles.subText}>
          {' '}
          Ready to start shopping. Sign up to get started.
        </Text>
      </ScrollView>
      <View style={OnBoardingstyles.buttonContainer}>
        <TouchableOpacity
          style={OnBoardingstyles.signupButton}
          onPress={() => navigation.navigate(ScreenNames.RegistrationScreen)}>
          <Text style={OnBoardingstyles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(ScreenNames.LoginScreen)}>
        <Text style={OnBoardingstyles.login}>
          Already Have an account <Text style={OnBoardingstyles.loginText}>Login</Text>
        </Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

export default OnBoardingScreen;
