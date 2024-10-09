import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { Chip } from 'react-native-paper';
import favoritesStyles from '../styles/favoritesStyles';

const Favorites = ({ item, navigation }) => {
    return (
        <View style={favoritesStyles.itemContainer}>
            <Pressable
                onPress={() => navigation.navigate('ItemDetails', { item })}
            >
                <Image source={{ uri: item.image }} style={favoritesStyles.image} />
                <View style={favoritesStyles.infoContainer}>
                    <Text style={favoritesStyles.name}>{item.name}</Text>
                    <Text style={favoritesStyles.description}>{item.description}</Text>
                    <Chip style={favoritesStyles.status} mode="outlined">
                        {item.status}
                    </Chip>
                </View>
            </Pressable>
        </View>
    )
}

export default Favorites