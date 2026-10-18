// App.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text} from 'react-native';
import ComponenteMayusculas from './components/ComponenteMayusculas';
import ComponenteMultiplicacion from './components/ComponenteMultiplicacion';

export default function App() {
  const [texto, setTexto] = useState('');
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Convertidor de Texto</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un texto"
        value={texto}
        onChangeText={setTexto}
      />
      {texto ? <ComponenteMayusculas texto={texto} /> : null}
      
      <Text style={styles.title}>Multiplicador</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa numero 1"
        value={numero1}
        keyboardType="numeric"
        onChangeText={text => setNumero1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresa numero 2"
        value={numero2}
        keyboardType="numeric"
        onChangeText={text => setNumero2(text)}
      />
      {numero1 && numero2 ? <ComponenteMultiplicacion numero1={parseFloat(numero1)} numero2={parseFloat(numero2)} /> : null}
      
      <Button
        title="Limpiar inputs"
        onPress={() => {
          setTexto(''); 
          setNumero1(''); 
          setNumero2(''); 
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
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});