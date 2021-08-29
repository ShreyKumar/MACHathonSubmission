import { Camera } from 'expo-camera';
import * as React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function CameraScreen() {
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
            if (!camera.current) return
            await camera.current.takePictureAsync()
          }}
        />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: "100%",
    height: "100%",
    display: "flex",
  }
});
