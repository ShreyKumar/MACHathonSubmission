import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native'
import ProductListing from '../components/ProductListing'
import { Text, View } from '../components/Themed'

export default function ProductListings({ navigation }) {
  const products = [
    { name: 'Product 1', image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F83%2Fe1%2F83e1bf22cd2015bc509296ef1e2d5a4d29b70b7a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B4%5D&call=url[file:/product/main]', description: 'Cool Product', price: 40 },
    { name: 'Product 2', image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F83%2Fe1%2F83e1bf22cd2015bc509296ef1e2d5a4d29b70b7a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B4%5D&call=url[file:/product/main]', description: 'Cool Product', price: 40 },
    { name: 'Product 3', image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F83%2Fe1%2F83e1bf22cd2015bc509296ef1e2d5a4d29b70b7a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B4%5D&call=url[file:/product/main]', description: 'Cool Product', price: 40 },
    { name: 'Product 4', image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F83%2Fe1%2F83e1bf22cd2015bc509296ef1e2d5a4d29b70b7a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B4%5D&call=url[file:/product/main]', description: 'Cool Product', price: 40 },
    { name: 'Product 5', image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F83%2Fe1%2F83e1bf22cd2015bc509296ef1e2d5a4d29b70b7a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B4%5D&call=url[file:/product/main]', description: 'Cool Product', price: 40 }
  ]

  return (
    <View>
      <View style={styles.titleSection}>
        <Text style={styles.productsHeader}>My Products</Text>
        <Button style={styles.productButton} title="Add a Product" onPress={() => navigation.navigate('CameraScreen')} />
      </View>
      <View style={styles.productListings}>
        {
          products.map(({ name, image, description, price }) => (
            <ProductListing
              key={name}
              image={image}
              name={name}
              description={description}
              price={price}
            />
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16
  },
  productListings: {
    display: 'flex'
  },
  productsHeader: {
    fontSize: 24
  },
  productsButton: {
    fontSize: 24
  }
})
