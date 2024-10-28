import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import shoppingCartStyles from '../styles/shoppingCartStyles';
import globalStyles from '../styles/globalStyles'
import { Switch } from 'react-native-paper';

const ShoppingCart = ({ item, onIncrease, onDecrease, onDelete, onSelect }) => {
  return (
    <View style={shoppingCartStyles.itemContainer}>
        <Image source={{ uri: item.image }} style={globalStyles.image} />
        <View style={globalStyles.itemDetails}>
            <Text style={globalStyles.itemName}>{item.name}</Text>
            <Text style={shoppingCartStyles.itemDescription}>{item.description}</Text>
            <Text style={globalStyles.itemPrice}>${item.value} x {item.count}</Text>
            <View style={shoppingCartStyles.quantityContainer}>
                <Pressable onPress={onDecrease} style={shoppingCartStyles.quantityButton}>
                    <Text style={globalStyles.emoji}>➖</Text>
                </Pressable>
                <Text style={shoppingCartStyles.quantityText}>{item.count}</Text>
                <Pressable onPress={onIncrease} style={shoppingCartStyles.quantityButton}>
                    <Text style={globalStyles.emoji}>➕</Text>
                </Pressable>
            </View>
            <View>
                <Switch
                    value={item.isSelected}
                    onValueChange={() => onSelect(item.id)}
                />
            </View>
            <Pressable onPress={onDelete} style={shoppingCartStyles.deleteButton}>
                <Text style={globalStyles.emoji}>🗑️</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default ShoppingCart