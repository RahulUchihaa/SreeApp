import { View, Text } from 'react-native'
import React from 'react'
import { selectUser,  } from '../redux/UserSlice';
import { useSelector,  } from 'react-redux';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const user = useSelector(selectUser);
 
 
  return (
    <View>
     {user.is_consumer === true ?  <Text>Consumer</Text> : <Text>Producer</Text>}
    </View>
  )
}

export default HomeScreen