import {StyleSheet,Text,View,TextInput } from 'react-native';
import React, {useState} from 'react';

const styles = StyleSheet.create({
  paragraph: {
    margin: 32,
    fontSize: 18,
    textDecorationLine: 'underLine',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default function App() {
  const [fullname, setFullname] = useState("Saikou Trawally");
  return (
    <View>
      <Text style={styles.paragraph}>Hello,{fullname}</Text>
     
      <TextInput
      style={styles.paragraph}
      onChangeText={setFullname}
      placeholder='Hello'


      />
    </View>
  );
}
