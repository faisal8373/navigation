import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React ,{useEffect, useRef, useState} from 'react'
import { useCameraDevice, useCameraPermission, Camera, useCameraFormat, PhotoFile } from 'react-native-vision-camera'
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../components/firebaseStore";



const ScanBarcode = () => {
const [isActive, setIsActive] = useState(true)
const [picture, setPicture] = useState<PhotoFile>()
const [fileUrl, setFileUrl] = useState('')
  const camera = useRef<Camera>(null)

  //take picture and store in state
  const takePicture = async() =>{
    try{
  const photo = await camera.current?.takePhoto()
  setPicture(photo)
console.log('photo taken with details:',photo);
console.log('state: ', picture);

    }
    catch(error){
      console.log(error)
    }


    }
  

    //upload image to storage
    const uploadPicture = async() =>{
  
  if(picture){
    const parts = picture?.path.split('/');
  const fileName = parts[parts.length - 1];
    const storageRef = ref(storage, fileName);
    const response = await fetch(`file://${picture.path}`);
    const blob = await response.blob();
   
    

    uploadBytes(storageRef, blob).then((snapshot) =>{
      console.log('uploaded file to storage');
      const downloadURL = getDownloadURL(snapshot.ref).then((downloadURL):void =>{
       console.log(downloadURL)
      });

    }).catch((error) => {
      console.log(error);
      
    })
  }
}
 
    //Get permission for camera in android
    const { hasPermission, requestPermission } = useCameraPermission()

  const device = useCameraDevice('back')
   

  if (!hasPermission) return <Text>Need permission of Camera</Text>
  if (device == null) return <Text>No device found</Text>

   
  useEffect(() => {
    console.log('state in use effect:', picture);
    uploadPicture()
  }, [picture]);




    return (
      <>
    {picture ? 
    
    <Image source={{uri: `file://${picture.path}`}} style={StyleSheet.absoluteFill}/> 
      
:
<>
      <Camera
      ref={camera}

        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        
        photo={true}
      />
    
<Pressable
            onPress={takePicture}
            
            style={styles.cameraBtn}
           />

      
      </>
}
</>
    )

}

export default ScanBarcode

const styles = StyleSheet.create({
  cameraBtn: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
    width: 75,
    height: 75,
    backgroundColor: 
     'white',
    borderRadius: 75,
    borderColor: 'red',
    borderWidth: 4
  },

 
})