import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 

export default function ComponenteSuma({ numero1, numero2 }) {   
  return (     
    <View style={styles.container}>       
      <Text style={styles.text}>Resultado: {numero1 + numero2}!</Text>     
    </View>   
  ); 
}

const styles = StyleSheet.create({   
  container: {     
    padding: 20,     
    backgroundColor: '#f0f0f0',     
    borderRadius: 10,     
    alignItems: 'center',   
  },   
  text: {     
    fontSize: 18,     
    color: '#333',   
  }, 
});