import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 

export default function ComponenteMayusculas({ texto }) {   
  return (     
    <View style={styles.container}>       
      <Text style={styles.text}>MAYÚSCULAS: {texto.toUpperCase()}</Text>     
    </View>   
  );
}

const styles = StyleSheet.create({   
  container: {     
    padding: 20,     
    backgroundColor: '#e6f2ff',     
    borderRadius: 10,     
    alignItems: 'center',   
  },   
  text: {     
    fontSize: 18,     
    color: '#004080',
    fontWeight: 'bold',
  }, 
});