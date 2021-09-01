import * as React from 'react'
import { useState } from 'react';
import { Button, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from "../components/Themed";

export default function CameraPreview({ navigation, route: { params: { picture } } }) {
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState('')
  const [productDescription, setProductDescription] = useState('')

  return (
    <View>
      <Image style={styles.logo} source={{ uri: picture.uri }} />
      <TextInput
        placeholder="Product name"
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        placeholder="Price"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="number-pad"
      />
      <TextInput
        placeholder="Product Description"
        style={styles.textArea}
        value={productDescription}
        onChangeText={setProductDescription}
        numberOfLines={10}
        multiline
      />
      <Button title="Submit" onPress={() => navigation.navigate('SubmissionConfirmation')} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 190,
    height: 190
  },
  input: {
    height: 40,
    margin: 12,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  textArea: {
    margin: 12,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  }
})