import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../Helpers/Constants'
import SearchIcon from './SearchIcon'

const Header = () => {
  return (
    <View style={styles.Container}>
     <View style={styles.HeaderMenu}>
     <Text style={styles.LogoText}>Shree</Text>
     <SearchIcon stroke={COLORS.Black} />
     </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Container:{
        backgroundColor:COLORS.White,
        padding:20,
        elevation:5
    },
    HeaderMenu:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    LogoText:{
        fontSize:20,
        fontWeight:'bold',
        color:COLORS.Black

    }
})