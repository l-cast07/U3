// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ route, navigation }) {

  const { username = 'Invitado' } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Perfil</Text>
      <Text style={styles.text}>Usuario: {username}</Text>
      <Button
        title="Volver al Inicio"
        onPress={() => navigation.navigate('Home')}
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
    marginBottom: 10,
  },
});