import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import ItemCategories from '../screens/ItemCategories';
import ItemDetails from '../screens/ItemDetails';
import PQR from '../screens/PQR';
import Profile from '../screens/Profile';
import PaymentBranch from '../screens/PaymentBranchScreen';
import Offers from '../screens/Offers';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PurchasesScreen from '../screens/PurchasesScreen';
import ItemListScreen from '../screens/ItemListScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => (
  <Stack.Navigator initialRouteName="ItemCategories">
    <Stack.Screen name="ItemCategories" component={ItemCategories} options={{ headerShown: false }} />
    <Stack.Screen name="ItemListScreen" component={ItemListScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ItemDetails" component={ItemDetails} options={{ headerShown: false }} />
    <Stack.Screen name="PaymentBranch" component={PaymentBranch} options={{ headerShown: false }} />
    <Stack.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
    <Stack.Screen name="PurchasesScreen" component={PurchasesScreen} options={{ headerShown: false }} />
    <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
)

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused ? '🏠' : '🏡';
          } else if (route.name === 'PQR') {
            icon = focused ? '🗣️' : '🗨️'; 
          } else if (route.name === 'Perfil') {
            icon = focused ? '👤' : '👥';
          } else if (route.name === 'Favoritos') {
            icon = focused ? '❤️' : '💔'; 
          } else if (route.name === 'Carrito') {
            icon = focused ? '🛒' : '🛍️'; 
          } else if (route.name === 'Compras') {
            icon = focused ? '📦' : '📮'; 
          }

          return <Text style={{ fontSize: size, color }}>{icon}</Text>;
        },
        tabBarActiveTintColor: '#9575cd',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#6a1b9a', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
        tabBarLabelStyle: { fontSize: 15 },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false, title: 'Home' }} />
      <Tab.Screen name="PQR" component={PQR} options={{ headerShown: false }} />
      <Tab.Screen name="Favoritos" component={FavoritesScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Carrito" component={ShoppingCartScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={Profile} options={{ headerShown: false }} />
      <Tab.Screen name="Compras" component={PurchasesScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Main;
