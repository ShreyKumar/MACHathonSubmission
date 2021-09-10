import axios from 'axios';
import * as React from 'react'
import { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import { Text, View } from "../components/Themed";

export default function CameraPreview({ navigation, route: { params: { picture } } }) {
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState('')
  const [weight, setWeight] = useState('')
  const [type, setType] = useState('')
  const [productDescription, setProductDescription] = useState('')

  const addProduct = async () => {
    try {
      const body = {
        name: productName,
        description: productDescription,
        type,
        price: parseInt(price),
        weight: parseInt(weight)
      }

      axios.defaults.headers.common['x-auth-token'] = 'dultxck88h5be37gqhw55a4cdwlv8vh'
      const res = await axios.post('https://api.bigcommerce.com/stores/ehzu28z94w/v3/catalog/products',
      JSON.stringify(body))

      const createdProduct = res.data.data

      // const res2 = await axios.post('https://api.bigcommerce.com/stores/ehzu28z94w/v3/catalog/summary', JSON.stringify({ product_id: parseInt(createdProduct.id), image_ }))
      console.log(createdProduct.id)
    } catch (error) {
      console.error(error)
    }

    navigation.navigate('SubmissionConfirmation')
  }

  return (
    <ScrollView>
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
        placeholder="Weight"
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType="number-pad"
      />
      <View>
        <Text style={{ paddingLeft: 12, fontSize: 20 }}>Product Type</Text>
        <SelectDropdown
          data={['physical', 'digital']}
          defaultButtonText="Please select..."
          buttonStyle={styles.input}
          buttonTextStyle={styles.selectText}
          onSelect={(selectedItem) => {
            setType(selectedItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />
      </View>
      <TextInput
        placeholder="Product Description"
        style={styles.textArea}
        value={productDescription}
        onChangeText={setProductDescription}
        numberOfLines={10}
        multiline
      />
      <Button title="Submit" onPress={addProduct} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "40%",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 24
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
  },
  selectText: {
    fontSize: 15
  },
  productType: {
    display: 'flex'
  }
})