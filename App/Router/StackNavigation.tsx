import React from 'react';
import {
    ScreenNames,
    header_shown_false,
} from '../Helpers/Constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Registration from '../Screens/Registration';
import OnBoardingScreen from '../Screens/OnBoardingScreen';
import OTP from '../Screens/OTP';
import TabNavigation from './TabNavigation';
import Login from '../Screens/Login';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.SplashScreen}
        options={header_shown_false}
        component={Splash}
      />
      <Stack.Screen
        name={ScreenNames.RegistrationScreen}
        options={header_shown_false}
        component={Registration}
      />
       <Stack.Screen
        name={ScreenNames.OnboardingScreen}
        options={header_shown_false}
        component={OnBoardingScreen}
      />
        <Stack.Screen
        name={ScreenNames.OTPScreen}
        options={header_shown_false}
        component={OTP}
      />
        <Stack.Screen
        name={ScreenNames.BottomTabScreen}
        options={header_shown_false}
        component={TabNavigation}
      />
        <Stack.Screen
        name={ScreenNames.LoginScreen}
        options={header_shown_false}
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;