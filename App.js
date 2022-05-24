
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
export default function App() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [storageusername, setstorageusername] = useState('');
  const [storagepassword, setstoragepassword] = useState('');

  const getusername = async () => {
    const data = await AsyncStorage.getItem('itemList');
    setstorageusername(data)
  };
  const profile = async () => {
    await AsyncStorage.setItem('itemList', username);
    setUserName('');
    await getusername();
    await AsyncStorage.setItem('itemList', password);
    setPassword('');
    await getpassword();
  };
  const getpassword = async () => {
    const data = await AsyncStorage.getItem('itemList');
    setstoragepassword(data)
  }

  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <View>
        <TextInput style={styles.input} value={username} placeholder="Enter username" onChangeText={value => setUserName(value)} />
      </View>
      <View>
        <TextInput type='password'  style={styles.input} value={password} placeholder="Enter password" onChangeText={value => setPassword(value)} />


        <Button title='Login' color="#841584" onPress={() => profile()} />
         
      </View>
      <Text>Your UserName:    {storageusername}</Text>
      <Text>Your Password:    {storagepassword}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});