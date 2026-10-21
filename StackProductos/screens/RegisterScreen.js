import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Recibe la función addProduct del App.js y navigation
export default function RegisterScreen({ navigation, addProduct }) {
  const [itemId, setItemId] = useState('');
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');

  const handleSaveProduct = () => {
    if (!itemId || !item || !price) {
      Alert.alert('Error', 'Todos los campos son obligatorios. Intente de nuevo.');
      return;
    }

    // Crear el objeto del nuevo producto
    const newProduct = {
      id: itemId,
      name: item,
      price: parseFloat(price) || 0, // Asegurar que sea un número
    };

    // Llama a la función centralizada para guardar
    addProduct(newProduct);

    // Limpiar campos
    setItemId('');
    setItem('');
    setPrice('');

    Alert.alert('Éxito', `Producto "${item}" registrado correctamente.`);
    // Opcional: Volver al menú después del registro exitoso
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ingrese los detalles del producto</Text>

      <TextInput
        style={styles.input}
        placeholder="ID del ítem (Ej: P001)"
        value={itemId}
        onChangeText={setItemId}
      />

      <TextInput
        style={styles.input}
        placeholder="Descripción del ítem"
        value={item}
        onChangeText={setItem}
      />

      <TextInput
        style={styles.input}
        placeholder="Precio (Ej: 99.99)"
        value={price}
        onChangeText={text => setPrice(text.replace(',', '.'))}
        keyboardType="numeric"
      />

      {/* Se reemplaza Button por TouchableOpacity */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveProduct}
      >
        <Text style={styles.buttonText}>Guardar Producto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});