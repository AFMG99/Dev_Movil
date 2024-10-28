import React, { useEffect, useState } from 'react';
import { View, FlatList, Pressable, TextInput, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import itemListStyles from '../styles/itemListStyles';
import screenStyles from '../styles/screenStyles';
import ItemList from '../components/ItemList';
import db from '@react-native-firebase/firestore';

const ItemListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchVisible, setSearchVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const navigation = useNavigation();

  const categoryId = route.params?.categoryId;
  const query = searchQuery.toLowerCase();

  const loadItemsByCategory = async () => {
    if (!categoryId) return;

    try {
      const itemsData = await db()
        .collection('items')
        .where('idCategories', '==', db().collection('categories').doc(categoryId))
        .get();

      const allItems = itemsData.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      filterItems(allItems, query);
    } catch (error) {
      console.error('Error al cargar los artículos:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterItems = (allItems, query) => {
    let filtered = allItems;
    if (query) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
    }
    setFilteredItems(filtered);
  };

  useEffect(() => {
    loadItemsByCategory();
  }, [categoryId]);

  useEffect(() => {
    filterItems(filteredItems, query);
  }, [searchQuery]);

  const _handleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) setSearchQuery('');
  };

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <Text>Cargando...</Text>
      </View>
    );
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