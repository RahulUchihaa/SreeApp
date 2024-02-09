
import React from 'react'
import {StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { COLORS, ScreenNames, header_shown_false } from '../Helpers/Constants';
import HomeIcon from '../Components/HomeIcon';
import UserIcon from '../Components/UserIcon';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator  
    
    screenOptions={{
      tabBarStyle: {
        bottom: 0,
        backgroundColor: COLORS.theme,
        borderRadius: 3,
        height: 52,
        ...styles.shadow
    },
    }}>
      <Tab.Screen name={ScreenNames.Dashboard}   options={{
          ...header_shown_false,
          tabBarIcon: ({ focused }) => (
            <HomeIcon stroke={focused ? COLORS.RedText : COLORS.Black}  />
          ),
          tabBarActiveTintColor : COLORS.RedText,
          tabBarInactiveTintColor: COLORS.Black
        
        }} component={HomeScreen} />
      <Tab.Screen name={ScreenNames.ProfileScreen}   options={{
          ...header_shown_false,
          tabBarIcon: ({ focused }) => (
            <UserIcon stroke={focused ? COLORS.RedText : COLORS.Black}  />
          ),
          tabBarActiveTintColor : COLORS.RedText,
          tabBarInactiveTintColor: COLORS.Black
        }} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  shadow: {
      shadowColor: "#FFFFFF",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
  }
})