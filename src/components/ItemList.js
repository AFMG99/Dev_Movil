import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import itemListStyles from '../styles/itemListStyles'
import { useNavigation } from '@react-navigation/native'

const ItemList = ({ item }) => {
    const navigation = useNavigation()
    return (
        <Pressable
            onPress={() => navigation.navigate('ItemDetails', { item })}
            style={itemListStyles.listItem}
        >
            <Image style={itemListStyles.image} source={{ uri: item.image }} />
            <View style={itemListStyles.container}>
                <Text style={itemListStyles.itemTitle}>{item.name}</Text>
                <Text style={itemListStyles.itemDescription}>{`${item.description}`}</Text>
                <Text style={itemListStyles.itemPrice}>{`$${item.value}`}</Text>
            </View>
        </Pressable>
    )
}

export default ItemList