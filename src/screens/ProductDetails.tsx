import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'

type ProductProps = NativeStackScreenProps<RootStackPramList, 'ProductDetails'>


const ProductDetails = ({route}: ProductProps) => {
    const {product} = route.params
    console.log(product);
    
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imageUrl}} /> 
      <Text style={styles.heading}>{product?.productName}</Text>
      
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({ container:{
    
 flex:1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5, 
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading:{
    fontSize: 24,
    color: 'grey',
    textAlign: 'center'
  },
  
    image:{
        width: 500,
        height: 300,
        resizeMode: 'contain'
      }
  
})