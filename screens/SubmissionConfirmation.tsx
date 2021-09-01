import * as React from 'react'
import { Linking, StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed'

export default function SubmissionConfirmation ({ navigation }) {
  return (
    <View>
      <Text style={styles.title}>Product Submitted</Text>
      <Text style={styles.link} onPress={() => navigation.navigate('CameraScreen')}>Upload another one!</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>View it on your store</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  link: {
    fontSize: 15,
    marginTop: 30,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline"
  }
})

