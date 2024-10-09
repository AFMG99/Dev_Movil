import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';
import { favorites } from './Components/database';
import favoritesStyles from '../styles/favoritesStyles';
import screenStyles from '../styles/screenStyles';
import globalStyles from '../styles/globalStyles'
import styles from '../styles/globalStyles';

const Favorites = () => {
    const renderItem = ({ item }) => (
        <View style={favoritesStyles.itemContainer}>
            <Image source={{ uri: item.image }} style={favoritesStyles.image} />
            <View style={favoritesStyles.infoContainer}>
                <Text style={favoritesStyles.name}>{item.name}</Text>
                <Text style={favoritesStyles.description}>{item.description}</Text>
                <Chip style={favoritesStyles.status} mode="outlined">
                    {item.status}
                </Chip>
            </View>
        </View>
    );

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyles.headerText}>Favoritos</Text>
            </View>
            <FlatList
                data={favorites}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={favoritesStyles.container}
            />
        </View>
    );
};

export default Favorites;