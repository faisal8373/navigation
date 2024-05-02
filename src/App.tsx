/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Screens
import ScanBarcode from './screens/ScanBarcode';
import CapturedImages from './screens/CapturedImages';
// import CameraScreen from './components/Camera';
import ProductDetails from './screens/ProductDetails';



export type RootStackPramList = {
 
 'CameraScreen': undefined;
 'ScanBarcode': undefined;
 'CapturedImages': undefined;
 'ImageDetails': {product: Product};
 'ProductDetails': {product: Product}
};

const Stack = createNativeStackNavigator<RootStackPramList>()

function App(): React.JSX.Element {
 

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='CapturedImages'>
    <Stack.Screen 
     name= 'CapturedImages'
     component={CapturedImages}
     options={{title: 'Home'}}
     />
     
      <Stack.Screen 
     name= 'ScanBarcode'
     component={ScanBarcode}
     options={{title: 'Scan Barcode'}}
     />
   
     <Stack.Screen 
     name= 'ProductDetails'
     component={ProductDetails}
     options={{title: 'Product Details'}}
     />
     </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
