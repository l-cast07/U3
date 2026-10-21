import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChangeScreen from './screens/ChangeScreen';
import DisplayScreen from './screens/DisplayScreen';

const Stack = createStackNavigator();

export default function App() {

  const [sharedValue, setSharedValue] = useState('VALOR INICIAL desde App.js');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Change">
        
        <Stack.Screen
          name="Change"
          options={{ title: '1. Cambiar Variable' }}
        >
        
          {(props) => (
            <ChangeScreen
              {...props}
              sharedValue={sharedValue}        
              setSharedValue={setSharedValue} 
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen
          name="Display"
          options={{ title: '2. Ver Variable Global' }}
        >
          
          {(props) => (
            <DisplayScreen
              {...props}
              sharedValue={sharedValue} 
              setSharedValue={setSharedValue} 
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}