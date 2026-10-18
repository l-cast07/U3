// App.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text} from 'react-native';
import MiComponente from './components/MiComponente';
import ComponenteSuma from './components/ComponenteSuma';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Componente Saluda</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      {nombre ? <MiComponente nombre={nombre} /> : null}
      
      <Text style={styles.title}>Componente Suma</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa numero 1"
        value={numero1}
        keyboardType="numeric"
        onChangeText={text => setNumero1(Number(text))}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresa numero 2"
        value={numero2}
        keyboardType="numeric"
        onChangeText={text => setNumero2(Number(text))}
      />
      {numero1 && numero2 ? <ComponenteSuma numero1={parseFloat(numero1)} numero2={parseFloat(numero2)} /> : null}
      
      <Button
        title="Limpiar inputs"
        onPress={() => {
          setNombre(''); // Limpiar el campo de texto
          setNumero1(''); // Limpiar el campo de texto
          setNumero2(''); // Limpiar el campo de texto
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});