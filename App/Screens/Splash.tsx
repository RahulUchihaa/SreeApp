// SplashScreen.js
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import React from 'react';
import {View} from 'react-native';
import {ScreenNames} from '../Helpers/Constants';
import {GlobalStyles} from '../Helpers/GlobalStyles';
import {useSelector} from 'react-redux';
import {selectUser} from '../redux/UserSlice';

const Splash = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const user = useSelector(selectUser);

  return (
    <View style={GlobalStyles.container}>
      <LottieView
        source={require('../assets/splash.json')}
        autoPlay
        loop={false}
        style={GlobalStyles.lottieView}
        onAnimationFinish={() => {
          if (user.full_name !== "") {
            navigation.replace(ScreenNames.BottomTabScreen);
          } else {
            navigation.replace(ScreenNames.OnboardingScreen);
          }
        }}
      />
    </View>
  );
};

export default Splash;
