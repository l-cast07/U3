// screens/DetailsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { itemId, item, price } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Detalles</Text>
      <Text style={styles.text}>ID del Ítem: {itemId}</Text>
      <Text style={styles.text}>Descripción: {item}</Text>
      <Text style={styles.text}>Precio: {price}</Text>
      <Button
        title="Volver a Inicio"
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
  },
});