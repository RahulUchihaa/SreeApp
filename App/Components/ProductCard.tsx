import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { COLORS } from '../Helpers/Constants';

type ProductCardProps = {
   item:{
    imageUrl:string;
    text:string;
    price: number;
    ratings: number
   }
}

const ProductCard:React.FC<ProductCardProps> = ({item}) => {

    return (
      <View style={cardStyles.container}>
        <Image source={{uri: item.imageUrl}} style={cardStyles.image} />
        <View style={cardStyles.textContainer}>
          <Text style={cardStyles.productName}>{item.text}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={cardStyles.price}>{`RS ${item.price}`}</Text>
          <Text style={cardStyles.ratings}>{`${item.ratings} *`}</Text>
        </View>
        </View>
      </View>
    );
  };

export default ProductCard

const cardStyles = StyleSheet.create({
    container: {
      width: 150,
      height:230,
      marginRight: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 170,
      resizeMode: 'cover',
    },
    textContainer: {
      padding: 10,
    },
    productName: {
      fontSize: 16,
      marginBottom:10,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 14,
      color: COLORS.theme,
      fontWeight: 'bold',
    },
    ratings: {
      fontSize: 12,
      color: COLORS.DarkGrey,
      fontWeight: 'bold',
    },
  });