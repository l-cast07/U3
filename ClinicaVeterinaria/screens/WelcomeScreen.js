import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeScreen({ route, navigation }) {
  // Recibimos parámetros de la ruta (o usamos uno por defecto)
  const userName = route.params?.userName || 'Usuario';

  return (
    <View style={styles.container}>
      <Ionicons name="paw" size={80} color="#4A90E2" style={styles.icon} />
      <Text style={styles.greeting}>¡Hola, {userName}!</Text>
      <Text style={styles.instruction}>
        Bienvenido al sistema central de VetCare. Desde aquí puedes programar y gestionar los servicios para tus pacientes peludos.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Services')}
      >
        <Text style={styles.buttonText}>Programar Nueva Cita</Text>
        <Ionicons name="arrow-forward" size={20} color="#FFF" style={{ marginLeft: 10 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#FFF',
  },
  icon: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    textAlign: 'center',
  },
  instruction: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});