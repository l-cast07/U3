import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VET_SERVICES = [
  {
    id: '1',
    title: 'Consulta General',
    description: 'Revisión médica completa y diagnóstico',
    price: 450,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=300&q=80',
  },
  {
    id: '2',
    title: 'Esquema de Vacunación',
    description: 'Aplicación de vacunas según cartilla',
    price: 300,
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cb080d46?w=300&q=80',
  },
  {
    id: '3',
    title: 'Baño y Estética',
    description: 'Baño medicado, corte de pelo y uñas',
    price: 600,
    image: 'https://images.unsplash.com/photo-1516734212498-1320716dc19b?w=300&q=80',
  },
];

export default function ServicesScreen({ navigation }) {
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (id) => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
      return { ...prev, [id]: current - 1 };
    });
  };

  const proceedToReview = () => {
    // Filtramos los servicios que tienen cantidad > 0
    const selectedServices = VET_SERVICES.filter(srv => quantities[srv.id] > 0).map(srv => ({
      ...srv,
      quantity: quantities[srv.id]
    }));

    if (selectedServices.length === 0) {
      Alert.alert('Aviso', 'Selecciona al menos un servicio para agendar la cita.');
      return;
    }

    navigation.navigate('OrderReview', { selectedServices });
  };

  const renderService = ({ item }) => {
    const qty = quantities[item.id] || 0;
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>${item.price} MXN</Text>
          
          <View style={styles.controls}>
            <TouchableOpacity style={styles.controlButton} onPress={() => handleDecrement(item.id)}>
              <Ionicons name="remove" size={20} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{qty}</Text>
            <TouchableOpacity style={styles.controlButton} onPress={() => handleIncrement(item.id)}>
              <Ionicons name="add" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={VET_SERVICES}
        keyExtractor={item => item.id}
        renderItem={renderService}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={proceedToReview}>
          <Text style={styles.checkoutText}>Revisar Cita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  card: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: { width: 100, height: '100%' },
  infoContainer: { flex: 1, padding: 15 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#2C3E50' },
  description: { fontSize: 13, color: '#7F8C8D', marginVertical: 5 },
  price: { fontSize: 16, fontWeight: 'bold', color: '#27AE60', marginBottom: 10 },
  controls: { flexDirection: 'row', alignItems: 'center' },
  controlButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    padding: 5,
  },
  quantityText: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 15 },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  checkoutButton: {
    backgroundColor: '#27AE60',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});