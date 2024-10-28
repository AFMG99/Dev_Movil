import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import UserRegistration from './src/screens/UserRegistration';
import Main from './src/navigation/Main';
import { ContextProvider } from './src/context/Context';

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <ContextProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isAuthenticated ? (
              <>
                <Stack.Screen name="Login">
                  {props => <Login {...props} onLogin={handleLogin} />}
                </Stack.Screen>
                <Stack.Screen name="UserRegistration" component={UserRegistration} />
              </>
            ) : (
              <Stack.Screen name="Main" component={Main} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ContextProvider>
  );
};

export default App;
