import { createSlice, nanoid } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';
import { db } from "./firebaseStore";
import { collection, doc, getDoc } from "firebase/firestore"; 


let data = new Array()
const getProducts = () =>{
   
//    const productCollection =  firestore().collection('products').get().then((querySnapshot) => {
//       querySnapshot.forEach(snapshot => {
//           data.push(snapshot.data());
//           console.log('snapshot', snapshot);
          
//       })
//   })
//     return productCollection

const docRef = doc(db, "products");
getDoc(docRef).then((docSnap)=>{
    console.log(docSnap);
    
});




}
getProducts()

const initialState = {
    products: data
    
    
    // [
    //     {id: '1', imageUrl: 'Image.jpeg', productName: 'Mobile'}
    // ]
}


export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        addProduct:(state, action) => {
            const product = {
                id: '1',
                imageUrl: action.payload,
                productName: action.payload
            }
            state.products.push(product)

        },
        
    }
})

export const {addProduct} = ProductSlice.actions
export default ProductSlice.reducer