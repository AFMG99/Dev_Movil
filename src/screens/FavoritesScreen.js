import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import favoritesStyles from '../styles/favoritesStyles';
import screenStyles from '../styles/screenStyles';
import globalStyles from '../styles/globalStyles'
import Favorites from '../components/Favorites';
import Context from '../context/Context';

const FavoritesScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const favoritesItems = state.favorites

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyles.headerText}>Favoritos</Text>
            </View>
            <FlatList
                data={favoritesItems}
                renderItem={({ item }) => (
                    <Favorites
                        item = {item}
                        navigation = {navigation} 
                    />                  
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={favoritesStyles.container}
            />
        </View>
    );
};

export default FavoritesScreen;