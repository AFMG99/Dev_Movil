import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="ItemCategories">
      <Stack.Screen name="ItemCategories" component={ItemCategories} options={{ headerShown: false }} />
      <Stack.Screen name="ItemList" component={ItemList} options={{ headerShown: false }}/>
      <Stack.Screen name="ItemDetails" component={ItemDetails} options={{ headerShown: false }}/>
      <Stack.Screen name="PaymentBranch" component={PaymentBranch} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'PQR':
              iconName = 'help-circle';
              break;
            case 'ShoppingCart':
              iconName = 'cart';
              break;
            case 'Profile':
              iconName = 'account';
              break;
            case 'Favorites':
              iconName = 'heart';
              break;
            default:
              iconName = 'home';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="PQR" component={PQR} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Purchases" component={Purchases} />
      <Stack.Screen name="ItemCategories" component={ItemCategories} />
      <Stack.Screen name="ItemList" component={ItemList} />
      <Stack.Screen name="ItemDetails" component={ItemDetails} />
    </Stack.Navigator>
  );
};

export default Main;