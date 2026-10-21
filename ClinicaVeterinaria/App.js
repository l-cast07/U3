import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importación de Pantallas
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import OrderReviewScreen from './screens/OrderReviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#4A90E2' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Inicio', headerLeft: null }} // Evita volver al login con el botón 'Atrás'
        />
        <Stack.Screen 
          name="Services" 
          component={ServicesScreen} 
          options={{ title: 'Catálogo de Servicios' }} 
        />
        <Stack.Screen 
          name="OrderReview" 
          component={OrderReviewScreen} 
          options={{ title: 'Revisión de Cita' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}