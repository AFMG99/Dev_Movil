import React, { useEffect, useState } from 'react';
import { View, FlatList, Pressable, TextInput, Text, Image, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { items } from './Components/database';
import globalStyles from '../styles/globalStyles';
import itemListStyles from '../styles/itemListStyles';
import screenStyles from '../styles/screenStyles';

const ItemList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  
  const categoryId = route.params?.categoryId;
  const query = searchQuery.toLowerCase();

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = items
      .filter(item => !categoryId || item.categoryId === categoryId)
      .filter(item => item.name.toLowerCase().includes(query));
    setFilteredItems(filtered);
  }, [query, categoryId]);

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate('ItemDetails', { item })}
      style={itemListStyles.listItem}
    >
      <Image style={itemListStyles.image} source={{ uri: item.image }} />
      <View>
        <Text style={itemListStyles.itemTitle}>{item.name}</Text>
        <Text style={itemListStyles.itemDescription}>{`${item.description}`}</Text>
        <Text style={itemListStyles.itemPrice}>{`$${item.value}`}</Text>
      </View>
    </Pressable>
  );

  const _handleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) setSearchQuery('');
  };

  return (
    <View style={globalStyles.container}>
      <View style={[screenStyles.headerWave, itemListStyles.header]}>
        <Pressable onPress={() => navigation.goBack()} style={itemListStyles.iconContainer}>
          <Text style={itemListStyles.backButton}>🔙</Text>
        </Pressable>
        {searchVisible ? (
          <TextInput
            placeholder="Buscar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            autoFocus={true}
            style={itemListStyles.searchBar}
            placeholderTextColor="#fff"
          />
        ) : (
          <Text style={globalStyles.headerText}>Lista de artículos</Text>
        )}
        <Pressable onPress={_handleSearch} style={itemListStyles.iconContainer}>
          <Text style={itemListStyles.searchIcon}>🔍</Text>
        </Pressable>
      </View>
      <Pressable 
        style={itemListStyles.offersButton} 
        onPress={() => navigation.navigate('Offers')}
      >
        <Text style={itemListStyles.offersButtonText}>Ver Ofertas</Text>
      </Pressable>

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={itemListStyles.listContent}
      />
    </View>
  );
};

export default ItemList;