import { View, Text } from 'react-native'
import React from 'react'
import { selectUser,  } from '../redux/UserSlice';
import { useSelector,  } from 'react-redux';
import Producer from './Producer';
import Consumer from './Consumer';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const user = useSelector(selectUser);
 
 
  return (
    <View>
     {user.is_consumer === true ? <Consumer /> : <Producer />}
    </View>
  )
}

export default HomeScreen