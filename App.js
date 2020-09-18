import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';


export default function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  }

  const [birthdays, setBirthdays] = useState(
    [
      { name: { name }, key: '1' }
    ]
  );

  const [name, setName] = useState('Joe');



  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setName(val)} />

      <p>{name} is {count} years old...</p>

      <Button title='Birthday' onPress={clickHandler} />

      <FlatList>
        data={birthdays}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      </FlatList>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
