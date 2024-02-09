import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { selectUser, setUser } from '../redux/UserSlice';
import { COLORS, ScreenNames } from '../Helpers/Constants';
import RightIcon from '../Components/RightIcon';
import UserIcon from '../Components/UserIcon';
import EmailIcon from '../Components/EmailIcon';
import PhoneIcon from '../Components/PhoneIcon';
import LogoutIcon from '../Components/LogoutIcon';
import { Profilestyles } from '../Helpers/GlobalStyles';
import Toast from 'react-native-toast-message';

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
   console.log(user)
  const handleLogout = async () => {
    const emptyUser = {
      full_name: '',
      email: '',
      phone_number: 0,
      is_consumer: false,
    };
    try {
      await AsyncStorage.clear();
      auth().signOut();
      dispatch(setUser(emptyUser));
      navigation.navigate(ScreenNames.OnboardingScreen);
    } catch (error) {
      Toast.show({
        type:'error',
        text1: "Error during logout",
      })
      console.error('Error during logout:', error);
    }
  };

  return (
    <View style={Profilestyles.container}>
      <View style={Profilestyles.Container}>
        <View>
          <Text style={Profilestyles.Usernamestyle}>Welcome, {user.full_name}</Text>
          <Text style={Profilestyles.Emailstyle}>
            This section is all about you
          </Text>
        </View>
        <RightIcon />
      </View>
      <View style={Profilestyles.Containerwithourflex}>
        <Text style={Profilestyles.Title}>Personal Details</Text>
        {renderUserDetail( user.full_name, <UserIcon stroke={COLORS.DarkGrey} />)}
        {renderUserDetail( user.email, <EmailIcon />)}
        {renderUserDetail( user.phone_number, <PhoneIcon />)}
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <View style={[Profilestyles.Container]}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={[Profilestyles.Title, { color: COLORS.primaryBg }]}>
              Sign Out
            </Text>
          </View>
          <LogoutIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const renderUserDetail = ( value: string | number, icon: React.ReactNode) => (
  <View style={Profilestyles.usernameContainer}>
    {icon}
    <Text style={Profilestyles.username}>
       {value}
    </Text>
  </View>
);

export default ProfileScreen;
