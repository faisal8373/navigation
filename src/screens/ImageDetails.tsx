import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'




const ImageDetails = ({product}) => {
  
  console.log(product.imageUrl)

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:product.imageUrl}}/>
      <Text style={styles.heading}>{product?.productName}</Text>
      
    </View>
  )
}

export default ImageDetails

const styles = StyleSheet.create({
  container:{
    
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5, 
    margin: 10
  },
  heading:{
    fontSize: 16,
    color: 'grey',
    textAlign: 'center'
    
  },
  image:{
    width: 100,
    height: 80,
    resizeMode: 'contain'
  }
})