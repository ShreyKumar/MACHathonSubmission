import * as React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Text, View } from './Themed'

export default function ProductListing ({ name, image, description, price }) {
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={{ uri: image }} />
      <Text>{`Name: ${name}`}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40
  },
  productImage: {
    width: 400,
    height: 400
  }
})
