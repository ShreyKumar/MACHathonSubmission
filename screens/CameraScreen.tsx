import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import * as React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function CameraScreen({ navigation }) {
  const { front: FRONT_CAMERA, back: BACK_CAMERA } = Camera.Constants.Type
  const camera = useRef(null)
  const [isCameraAllowed, setIsCameraAllowed] = useState(false)
  const [orientation, setOrientation] = useState(BACK_CAMERA)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setIsCameraAllowed(status === 'granted');
    })();
  }, [])

  if (!isCameraAllowed) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <Camera ref={camera} style={styles.camera} type={orientation}>
        <Button
          title="Flip"
          onPress={() => setOrientation(orientation === FRONT_CAMERA ? BACK_CAMERA : FRONT_CAMERA)}
        />
        <Button
          title="Take picture"
          onPress={async () => {
            const picture = await camera.current?.takePictureAsync()
            // await MediaLibrary.saveToLibraryAsync(picture.uri)
            navigation.navigate('CameraPreview', { picture })
          }}
        />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
