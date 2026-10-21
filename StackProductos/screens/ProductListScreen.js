import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Componente para renderizar cada ítem en la lista
const ProductItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemId}>#{item.id}</Text>
    <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
    <Text style={styles.itemPrice}>$ {item.price.toFixed(2)}</Text>
  </View>
);

// Recibe 'products' del App.js y 'navigation'
export default function ProductListScreen({ products, navigation }) {

  if (products.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No hay productos registrados en el inventario.</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={styles.buttonText}>Volver al Menú</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={products} // El array que obtenemos de App.js
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={item => item.id.toString() + item.name} // Clave única
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#eef',
    padding: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
    borderLeftWidth: 6,
    borderLeftColor: '#007AFF',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemId: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
    width: '15%',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    width: '55%',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
    width: '25%',
    textAlign: 'right',
  },
  container: { // Estilos para la pantalla vacía
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    marginBottom: 30,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#FF6347',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});