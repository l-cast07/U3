import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 

export default function ComponenteMultiplicacion({ numero1, numero2 }) {   
  return (     
    <View style={styles.container}>       
      <Text style={styles.text}>El producto es: {numero1 * numero2}</Text>     
    </View>   
  );
}

const styles = StyleSheet.create({   
  container: {     
    padding: 20,     
    backgroundColor: '#fff0f5',     
    borderRadius: 10,     
    alignItems: 'center',   
  },   
  text: {     
    fontSize: 18,     
    color: '#800040',
    fontWeight: 'bold',
  }, 
});