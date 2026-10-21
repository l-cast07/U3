import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import WelcomeScreen from './screens/WelcomeScreen.js';
import ProductsScreen from './screens/ProductsScreen.js';
import OrderReviewScreen from './screens/OrderReviewScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Registro' }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Bienvenido' }}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ title: 'Productos en Venta' }}
        />
        <Stack.Screen
          name="OrderReview"
          component={OrderReviewScreen}
          options={{ title: 'Revisar Pedido' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}