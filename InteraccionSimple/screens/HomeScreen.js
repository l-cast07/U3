// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [itemId, setItemId] = useState('');
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla Principal</Text>

      <TextInput
        style={styles.input}
        placeholder="ID del Ítem"
        value={itemId}
        onChangeText={setItemId}
      />

      <TextInput
        style={styles.input}
        placeholder="Descripción del Ítem"
        value={item}
        onChangeText={setItem}
      />

      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Button
        title="Ir a Detalles"
        onPress={() => navigation.navigate('Details', { itemId, item, price })}
      />
        <br></br>
      <Button
        title="Ir al perfil"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    paddingHorizontal: 10,
    
  },
});