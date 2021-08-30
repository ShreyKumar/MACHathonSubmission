import * as React from 'react'
import { Image, StyleSheet } from 'react-native';
import { Text, View } from "../components/Themed";

export default function CameraPreview({ navigation, route: { params: { picture } } }) {
  return (
    <View>
      <Text>Hello</Text>
      <Image style={styles.logo} source={{ uri: picture.uri }} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 190,
    height: 190
  }
})