import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Componente 1: Saluda al usuario
function MiComponente({ nombre }) {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.text}>Hola, {nombre}!</Text>
    </View>
  );
}

// Componente 2: Suma dos números
function ComponenteSuma({ numero1, numero2 }) {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.text}>Resultado: {numero1 + numero2}!</Text>
    </View>
  );
}

// Componente Principal
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
      {numero1 && numero2 ? (
        <ComponenteSuma numero1={parseFloat(numero1)} numero2={parseFloat(numero2)} />
      ) : null}

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
    backgroundColor: '#fff',
  },
  componentContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
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
  text: {
    fontSize: 18,
    color: '#333',
  },
});