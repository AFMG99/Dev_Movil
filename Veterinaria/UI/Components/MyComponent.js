import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ItemCategories from './ItemCategories';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import PQR from './PQR';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';
import Favorites from './Favorites';
import PaymentBranch from './PaymentBranch';
import Purchases from './Purchases';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="ItemCategories">
    <Stack.Screen name="ItemCategories" component={ItemCategories} />
    <Stack.Screen name="ItemList" component={ItemList} />
    <Stack.Screen name="ItemDetails" component={ItemDetails} />
  </Stack.Navigator>
);

const BottomTabNavigator = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'pqr', title: 'PQR', icon: 'help-circle' },
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'profile', title: 'Profile', icon: 'account' },
    { key: 'favorites', title: 'Favorites', icon: 'heart' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeStack,
    pqr: PQR,
    profile: Profile,
    favorites: Favorites,
  });

  const renderHeader = () => (
    <Appbar.Header style={styles.header}>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content title={routes[index].title} />
      <Appbar.Action icon="magnify" onPress={() => {/* Funcionalidad de búsqueda */}} />
      <Appbar.Action icon="cart" onPress={() => navigation.navigate('ShoppingCart')} />
      <Appbar.Action icon="heart" onPress={() => navigation.navigate('Favorites')} />
    </Appbar.Header>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={({ route, color }) => (
          <Icon name={route.icon} size={24} color={color} />
        )}
      />
    </View>
  );
};

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentBranch" component={PaymentBranch} />
      <Stack.Screen name="Purchases" component={Purchases} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;