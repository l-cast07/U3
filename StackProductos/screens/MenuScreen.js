import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Recibe 'products' para mostrar cuántos hay y 'navigation'
export default function MenuScreen({ navigation, products }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema de Gestión de Inventario</Text>
      <Text style={styles.subtitle}>Productos registrados: {products.length}</Text>

      {/* Botón para ir a la pantalla de Registro */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Registrar Producto</Text>
      </TouchableOpacity>

      {/* Botón para ir a la lista de Productos */}
      <TouchableOpacity
        style={[styles.button, styles.viewListButton]}
        onPress={() => navigation.navigate('ProductList')}
        // Deshabilitar el botón si no hay productos
        disabled={products.length === 0}
      >
        <Text style={styles.buttonText}>Ver Lista ({products.length})</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  viewListButton: {
    backgroundColor: '#28a745', // Color diferente para distinguir
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});