import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, Pressable } from 'react-native';
import globalStyles from '../styles/globalStyles'
import screenStyles from '../styles/screenStyles';
import itemCategoriesStyles from '../styles/itemCategoriesStyles';
import db, { onSnapshot } from '@react-native-firebase/firestore';

const ItemCategories = ({ navigation }) => {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadCategories = async () => {
        try {
            const categoriesData = await db().collection('categories').get();
            setCategories(categoriesData.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })));
        } catch (error) {
            console.error('Error al cargar categorías:', error);
        }
    };

    const loadItems = async () => {
        const suscriber = db().collection('items').onSnapshot(snapshot => {
            const itemsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setItems(itemsData);
            setLoading(false);
        }, error => {
            console.error('Error al cargar Items:', error);
            setLoading(false);
        });
        return () => suscriber();
    };

    useEffect(() => {
        loadCategories();
        loadItems();
    }, []);

    if (loading) {
        return (
            <View style={globalStyles.container}>
                <Text>Cargando...</Text>
            </View>
        );
    };

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyles.headerText}>Categorías</Text>
            </View>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigation.navigate('ItemListScreen', { categoryId: item.id })}
                        style={itemCategoriesStyles.categoryItem}
                    >
                        <Image source={{ uri: item.image }} style={itemCategoriesStyles.categoryImage} />
                        <Text style={itemCategoriesStyles.categoryName}>{item.name}</Text>
                    </Pressable>
                )}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={itemCategoriesStyles.categoryList}
            />
            <Text style={itemCategoriesStyles.sectionTitle}>Todos los Artículos</Text>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigation.navigate('ItemDetails', { itemId: item.id })}
                        style={itemCategoriesStyles.itemContainer}
                    >
                        <Image source={{ uri: item.image }} style={itemCategoriesStyles.itemImage} />
                        <Text style={itemCategoriesStyles.itemName}>{item.name}</Text>
                        <Text style={itemCategoriesStyles.itemDescription}>{item.description}</Text>
                        <Text style={itemCategoriesStyles.itemPrice}>${item.value}</Text>
                    </Pressable>
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={itemCategoriesStyles.columnWrapper}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default ItemCategories;