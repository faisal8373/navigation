import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React ,{useEffect, useRef, useState} from 'react'
import { useCameraDevice, useCameraPermission, Camera, useCameraFormat, PhotoFile } from 'react-native-vision-camera'


const ScanBarcode = () => {
const [isActive, setIsActive] = useState(true)

  const camera = useRef<Camera>(null)
  const takePicture = async() =>{
  const photo = await camera.current?.takePhoto()
  
console.log('photo taken with details:',photo);

    }
  
    const { hasPermission, requestPermission } = useCameraPermission()

  const device = useCameraDevice('back')
   
  if (!hasPermission) return <Text>Need permission of Camera</Text>
  if (device == null) return <Text>No device found</Text>

   
    return (
      <>
      

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
  }
 
})