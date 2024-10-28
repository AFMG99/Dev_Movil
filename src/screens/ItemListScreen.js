import React, { useEffect, useState } from 'react';
import { View, FlatList, Pressable, TextInput, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { items } from '../components/database';
import globalStyles from '../styles/globalStyles';
import itemListStyles from '../styles/itemListStyles';
import screenStyles from '../styles/screenStyles';
import ItemList from '../components/ItemList';

const ItemListScreen = () => {
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
        renderItem={({ item }) => (
          <ItemList
            item={item}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={itemListStyles.listContent}
      />
    </View>
  );
};

export default ItemListScreen