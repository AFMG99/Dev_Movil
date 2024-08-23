import React from 'react';
import { View, StyleSheet, FlatList, Text, Image, Pressable } from 'react-native';
import { Appbar } from 'react-native-paper';
import { categories, items } from './Components/database';

const ItemCategories = ({ navigation }) => {
    const renderCategory = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('ItemList', { categoryId: item.id })} style={styles.categoryItem}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
        </Pressable>
    );

    const renderItem = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('ItemDetails', { item })} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>${item.value}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Categorías</Text>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryList}
            />
            <Text style={styles.sectionTitle}>Todos los Artículos</Text>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F1F5',
        padding: 15,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4A148C',
        marginVertical: 12,
    },
    categoryList: {
        paddingHorizontal: 5,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 15,
    },
    categoryImage: {
        width: 90,
        height: 90,
        borderRadius: 8,
        backgroundColor: '#E1BEE7',
    },
    categoryName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '500',
        color: '#4A148C',
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        elevation: 2,
    },
    itemImage: {
        width: 140,
        height: 140,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#EDE7F6',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A148C',
        textAlign: 'center',
    },
    itemDescription: {
        fontSize: 12,
        color: '#757575',
        textAlign: 'center',
        marginVertical: 4,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#7B1FA2',
        textAlign: 'center',
    },
});

export default ItemCategories;