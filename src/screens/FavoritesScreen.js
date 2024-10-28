import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import favoritesStyles from '../styles/favoritesStyles';
import screenStyles from '../styles/screenStyles';
import globalStyles from '../styles/globalStyles'
import Favorites from '../components/Favorites';
import Context from '../context/Context';
import db from '@react-native-firebase/firestore'

const FavoritesScreen = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    
    const loadFavorites = async () => {
        try {
            const snapshot = await db().collection('items').where('rating', '>=', 3).get();
            const favoriteItems = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            dispatch({ type: 'SET_FAVORITES', payload: favoriteItems });
        } catch (error) {
            console.error('Error al cargar los favoritos:', error);
        }
    };

    useEffect(() => {
        loadFavorites();
    }, []);

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyles.headerText}>Favoritos</Text>
            </View>
            <FlatList
                data={state.favorites}
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