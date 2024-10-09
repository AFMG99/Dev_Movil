import React from 'react';
import { View, FlatList, Text, Image, Pressable } from 'react-native';
import { categories, items } from '../components/database';
import globalStyles from '../styles/globalStyles'
import screenStyles from '../styles/screenStyles';
import itemCategoriesStyles from '../styles/itemCategoriesStyles';

const ItemCategories = ({ navigation }) => {
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
                        onPress={() => navigation.navigate('ItemDetails', { item })} 
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