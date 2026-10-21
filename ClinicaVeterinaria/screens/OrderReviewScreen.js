import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { Ionicons } from '@expo/vector-icons';

export default function OrderReviewScreen({ route, navigation }) {
  const { selectedServices } = route.params;

  const totalCost = selectedServices.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSendEmail = async () => {
    // Verificamos si el dispositivo puede enviar correos
    const isAvailable = await MailComposer.isAvailableAsync();
    
    if (!isAvailable) {
      Alert.alert('Error', 'El servicio de correo no está disponible en este dispositivo.');
      return;
    }

    // Formatear los detalles para el cuerpo del correo
    const servicesListText = selectedServices.map(
      s => `- ${s.quantity}x ${s.title}: $${s.price * s.quantity} MXN`
    ).join('\n');

    const emailBody = `Hola,\n\nSe ha solicitado agendar una nueva cita veterinaria con los siguientes servicios:\n\n${servicesListText}\n\nTotal estimado: $${totalCost} MXN\n\nPor favor, contactar al cliente para confirmar el horario.\n\nSaludos,\nApp VetCare`;

    try {
      const result = await MailComposer.composeAsync({
        recipients: ['recepcion@vetcareclinic.com'], // Destinatario predefinido
        subject: 'Solicitud de Nueva Cita Veterinaria',
        body: emailBody,
      });

      // Si el correo se envía o se guarda en borradores, volvemos al inicio
      if (result.status === 'sent' || result.status === 'saved') {
        Alert.alert('Éxito', 'La cita se ha solicitado correctamente.');
        navigation.navigate('Welcome');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al intentar enviar el correo.');
    }
  };

  const renderSummaryItem = ({ item }) => (
    <View style={styles.summaryRow}>
      <Text style={styles.summaryText}>{item.quantity}x {item.title}</Text>
      <Text style={styles.summaryPrice}>${item.price * item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Resumen de tu Cita</Text>

      <View style={styles.card}>
        <FlatList
          data={selectedServices}
          keyExtractor={item => item.id}
          renderItem={renderSummaryItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Costo Total Estimado</Text>
          <Text style={styles.totalAmount}>${totalCost} MXN</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.emailButton} onPress={handleSendEmail}>
        <Ionicons name="mail" size={24} color="#FFF" style={{ marginRight: 10 }} />
        <Text style={styles.emailButtonText}>Enviar Solicitud por Correo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F7FA' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#2C3E50', marginBottom: 20 },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 30,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  summaryText: { fontSize: 16, color: '#34495E' },
  summaryPrice: { fontSize: 16, color: '#34495E', fontWeight: '600' },
  separator: { height: 1, backgroundColor: '#E0E0E0' },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 2,
    borderColor: '#4A90E2',
  },
  totalText: { fontSize: 18, fontWeight: 'bold', color: '#2C3E50' },
  totalAmount: { fontSize: 18, fontWeight: 'bold', color: '#27AE60' },
  emailButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});