import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function DisplayScreen({ navigation, sharedValue, setSharedValue }) {
    const [modificar, setmodificar] = useState(sharedValue);

    const handleSaveAndGo = () => {
    if (!modificar.trim()) {
      Alert.alert('Error', 'El valor no puede estar vacío.');
      return;
    }

    setSharedValue(modificar);

    Alert.alert('Guardado', 'Variable global actualizada. ¡Navegando a la pantalla 1!');

    navigation.navigate('Change');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Valor Global Recibido (desde App.js):</Text>

      <View style={styles.displayBox}>
        <Text style={styles.displayText}>{sharedValue}</Text>
      </View>

      <Text style={styles.info}>
        Nuevo valor a guardar
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Aqui has el cambio"
        value={modificar}
        onChangeText={setmodificar}
      />

    <TouchableOpacity
        style={styles.button}
        onPress={handleSaveAndGo}
      >
        <Text style={styles.buttonText}>Actualizar y guardar</Text>

      </TouchableOpacity>

<br></br>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Change')}
      >
        <Text style={styles.buttonText}>Volver a la pantalla de entrada</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25, backgroundColor: '#f0f4f7', justifyContent: 'center' },
  header: { fontSize: 20, fontWeight: '600', color: '#333', marginBottom: 20, textAlign: 'center' },
  displayBox: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF9500',
    marginBottom: 40,
    elevation: 5,
  },
  displayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D50000',
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 30,
    backgroundColor: '#fff',
    fontSize: 16,
  }
});