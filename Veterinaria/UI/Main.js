import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemCategories from './ItemCategories';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import PQR from './PQR';
import Profile from './Profile';
import Favorites from './Favorites';
import PaymentBranch from './PaymentBranch';
import Purchases from './Purchases';
import ShoppingCart from './ShoppingCart';
import mainStyles from '../styles/mainStyles';
import Offers from './Offers';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="ItemCategories">
      <Stack.Screen name="ItemCategories" component={ItemCategories} options={{ headerShown: false }} />
      <Stack.Screen name="ItemList" component={ItemList} options={{ headerShown: false }} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentBranch" component={PaymentBranch} options={{ headerShown: false}}/>
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false}}/>
      <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false}}/>
      <Stack.Screen name="Purchases" component={Purchases} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  const [index, setIndex] = useState(0);

  const renderFooter = () => {
    return (
      <View style={mainStyles.footer}>
        {routes.map((route, routeIndex) => {
          const isSelected = index === routeIndex;
          return (
            <Pressable key={route.key} onPress={() => setIndex(routeIndex)}>
              <Animated.View style={[mainStyles.footerItem, isSelected && mainStyles.footerItemSelected]}>
                <Text style={[mainStyles.footerText, isSelected && mainStyles.footerTextSelected]}>
                  {route.title}
                </Text>
              </Animated.View>
            </Pressable>
          );
        })}
      </View>
    );
  };

  const renderContent = () => {
    switch (routes[index].key) {
      case 'home':
        return <Home />;
      case 'pqr':
        return <PQR />;
      case 'profile':
        return <Profile />;
      case 'favorites':
        return <Favorites />;
      case 'shoppingCart':
        return <ShoppingCart/>;
      case 'offers':
        return <Offers/>;
      case 'purchases':
        return <Purchases/>;
      default:
        return <ItemCategories />;
    }
  };

  const routes = [
    { key: 'home', title: '🏠\nHome' },
    { key: 'pqr', title: '🗣️\nPQR' },
    { key: 'favorites', title: '❤️\nFavoritos' },
    { key: 'shoppingCart', title: '🛒\nCarrito' },
    { key: 'profile', title: '👤\nPerfil' },
    { key: 'purchases', title: '📦\nCompras' },
  ];

  return (
    <View style={mainStyles.container}>
      <View style={mainStyles.content}>
        {renderContent()}
      </View>
      {renderFooter()}
    </View>
  );
};

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ItemList" component={ItemList} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
      <Stack.Screen name="PaymentBranch" component={PaymentBranch} />
      <Stack.Screen name="Purchases" component={Purchases} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="Offers" component={Offers} />
    </Stack.Navigator>
  );
};

export default Main;
