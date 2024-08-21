import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './UI/Login';
import Home from './UI/Home';
import UserRegistration from './UI/UserRegistration';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    /*
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Lista de Mascotas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>*/
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />         
          <Stack.Screen name="UserRegistration" component={UserRegistration} />         
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
