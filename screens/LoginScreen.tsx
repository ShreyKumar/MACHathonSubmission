import * as React from 'react';
import { useState } from 'react';
import { Alert, Button, Keyboard, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interactive product manager</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        onBlur={() => Keyboard.dismiss()}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onBlur={() => Keyboard.dismiss()}
      />
      <Button title="Login" onPress={() => navigation.navigate('ProductListings') }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    marginTop: "50%",
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 30
  },
  input: {
    height: 40,
    margin: 12,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15
  }
});
