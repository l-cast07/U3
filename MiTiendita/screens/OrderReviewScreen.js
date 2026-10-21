import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

// Comenzamos con la creación del componente:
export default function OrderReviewScreen({ route, navigation }) {
  const [selectedProducts, setSelectedProducts] = useState(route.params.selectedProducts);

  const updateQuantity = (product, quantity) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.map((item) =>
        item.id === product.id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const sendOrder = () => {
    const productDetails = selectedProducts.map((product) => `${product.name} (x${product.quantity}) - $${product.price * product.quantity}`).join('\n');
    const orderDetails = `Pedido:\n\n${productDetails}\n\nTotal: $${selectedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0)}`;
    MailComposer.composeAsync({
      recipients: ['example@example.com'],
      subject: 'Nuevo Pedido',
      body: orderDetails,
    }).then(() => {
      navigation.navigate('Welcome');
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text>{item.name}</Text>
            <Text>${item.price * item.quantity}</Text>
            <View style={styles.quantityContainer}>
              <Button
                title="-"
                onPress={() => updateQuantity(item, item.quantity > 1 ? item.quantity - 1 : 1)}
              />
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <Button title="+" onPress={() => updateQuantity(item, item.quantity + 1)} />
            </View>
          </View>
        )}
      />
      <Button title="Enviar Pedido" onPress={sendOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 18,
  },
});