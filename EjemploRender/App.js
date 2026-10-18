import React, {useState, memo} from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const Formulario = memo(({ producto, setProducto, agregarProducto }) => {
  console.log("Renderizando Formulario...");
  return (
    <View style={styles.formulario}>
      <Text style={styles.titulo}>Registrar Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del producto"
        value={producto}
        onChangeText={setProducto}
      />
      <Button title="Agregar" onPress={agregarProducto} />
    </View>
  );
});

const ListaProductos = memo(({productos}) => {
  console.log("Renderizando ListaProductos...");
  return (
    <View style={styles.lista}>
      <Text style={styles.titulo}>Lista de Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
});

const ConteoProductos = memo(({productos}) => {
  return (
    <View style={styles.lista}>
      <Text style={styles.titulo}>Cantidad de productos: {productos.length}</Text>
    </View>
  );
});

export default function App() {
  const [producto, setProducto] = useState('');
  const [productos, setProductos] = useState([]);

  const agregarProducto = () => {
    if (producto.trim() === '') return;
    setProductos([...productos, producto]);
    setProducto('');
  };

  console.log("Renderizando App...");

  return (
    <View style={styles.container}>
      <Formulario producto={producto} setProducto={setProducto} agregarProducto={agregarProducto} />
      <ListaProductos productos={productos} />
      <ConteoProductos productos={productos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  formulario: { flex: 1, marginBottom: 10 },
  lista: { flex: 2, borderTopWidth: 1, borderColor: '#ccc', paddingTop: 10 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 5, borderRadius: 5 },
  item: { fontSize: 16, marginVertical: 3 }
});