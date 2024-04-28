import { StyleSheet, Text, View, Pressable, FlatList  } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'
import ImageDetails from './ImageDetails'
import firestore from '@react-native-firebase/firestore';


type CapturedProps = NativeStackScreenProps<RootStackPramList, 'CapturedImages'>
// let data = [
//   {
//     id: '1',
//     imageUrl: 'Image1',
//     productName: 'Product1'
//   },
//   {
//     id: '2',
//     imageUrl: 'Image2',
//     productName: 'Product2'
//   },
//   {
//     id: '3',
//     imageUrl: 'Image3',
//     productName: 'Product3'
//   },
// ]

const CapturedImages = ({navigation}: CapturedProps) => {

let data = new Array()

const addProducts = async (imageUrl: string, productName: string ) =>{
   await firestore().collection('products').add({imageUrl: imageUrl, productName: productName})

}


  const getProducts = () =>{
   

    const productCollection =  firestore().collection('products').get().then((querySnapshot) => {
      querySnapshot.forEach(snapshot => {
          data.push(snapshot.data());
          // console.log(data);
      })
  })
    return productCollection
}
getProducts()
  return (
    <View style={styles.container}>
     
      <Pressable
        onPress={() => {navigation.navigate('ScanBarcode')}}
        
        >
            <Text style={styles.heading}>Scan Barcode</Text>
        </Pressable>
        <Text style={styles.heading}>Captured Images</Text>
        <View style={styles.productsContainer}>
        <FlatList
        numColumns={3}
    data={data}
    keyExtractor={item => item.id}
    
    renderItem={({item}) => (
        <Pressable
        onPress={() => {navigation.navigate('ProductDetails', {product:item})}}
        >
            <ImageDetails product = {item} />
        </Pressable>
    )}
     />
        </View>
    </View>
  )
}

export default CapturedImages

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
heading:{
  fontSize: 24,
  color: '#dddeed',
  textAlign: 'center',
  margin: 20,
  borderRadius: 10,
  backgroundColor: '#3e4ce6',
  padding: 10,
  fontWeight: 'bold'
},
productsContainer:{
  flex: 1,
}
})