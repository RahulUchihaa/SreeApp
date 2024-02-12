import {
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import RenderSliders from '../Components/RenderSliders';
import Pagination from '../Components/Pagination';
import {COLORS} from '../Helpers/Constants';
import ProductCard from '../Components/ProductCard';

const {width} = Dimensions.get('window');

const Producer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      id: '1',
      imageUrl:
        'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Special Offer 1',
    },
    {
      id: '2',
      imageUrl:
        'https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Special Offer 2',
    },
    {
      id: '3',
      imageUrl:
        'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D',
      text: 'Special Offer 3',
    },
  ];

  const featuredProducts = [
    {
      id: '1',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661637665280-0d485db5a74b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Product 1',
      price: 25.99,
      ratings: 4.5,
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1611253468024-df921701df4c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Product 2',
      price: 19.99,
      ratings: 3.8,
    },
    {
        id: '3',
        imageUrl: 'https://images.unsplash.com/photo-1695938104275-6284a26c9d12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Product 3',
        price: 25.99,
        ratings: 4.5,
      },
      {
        id: '4',
        imageUrl: 'https://images.unsplash.com/photo-1492552181161-62217fc3076d?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Product 4',
        price: 19.99,
        ratings: 3.8,
      },
    // Add more products as needed
  ];

  const Category = [
    {
      id: 'fruit1',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Fruits',
    },
    {
      id: 'vegetable1',
      imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Vegetable',
    },
    {
      id: 'herbal1',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661637670781-a902c7f051b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Herbal',
    },
    {
      id: 'dummy1',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Dummy Product',
    },
  ];

  return (
    <ScrollView style={styles.Container}>
      <Header />
      <View style={styles.SubContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => <RenderSliders item={item} />}
          keyExtractor={item => item.id}
          onScroll={data =>
            setActiveIndex(Math.round(data.nativeEvent.contentOffset.x / width))
          }
          horizontal
          snapToInterval={width}
          snapToAlignment="center"
          decelerationRate={'normal'}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Pagination data={data} index={activeIndex} />
      <View style={styles.SubContainer}>
        <Text style={styles.LogoText}>CATEGROIES</Text>
      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <FlatList
          data={Category}
          renderItem={({ item }) => (
            <View style={{ marginRight: 20 }}>
              <Image
                source={{ uri: item.imageUrl }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <Text style={{ marginTop: 10, textAlign: 'center',fontWeight:'bold' }}>
                {item.text}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.SubContainer}>
        <Text style={styles.LogoText}>FEATURED PRODUCTS</Text>
      </View>
      <View style={{paddingLeft: 20, paddingRight: 20,paddingBottom:20}}>
        <FlatList
          data={featuredProducts}
          renderItem={({item}) => <ProductCard item={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default Producer;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f6f5f4',
  },
  SubContainer: {
    padding: 20,
  },
  LogoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.Black,
  },
});


