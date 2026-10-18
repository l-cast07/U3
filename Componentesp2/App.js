// npx expo start --web
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from './components/CustomButton'; 
import CustomInput from './components/CustomInput';
import CustomModal from './components/CustomModal';

export default function App() {
  const [correo, setCorreo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      
      <CustomInput 
        label="Correo Electrónico"
        placeholder="ejemplo@correo.com"
        value={correo}
        onChangeText={setCorreo}
      />

      <CustomButton
        title="Registrar Correo"
        onPress={handleRegister}
      />

      <CustomModal 
        visible={modalVisible}
        title="¡Registro Exitoso!"
        message={`El correo ${correo || 'ingresado'} se ha guardado correctamente.`}
        onClose={() => {
          setModalVisible(false);
          setCorreo('');
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  }
});