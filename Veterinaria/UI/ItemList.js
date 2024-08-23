import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Appbar, List, Searchbar, Text } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { items } from './Components/database';

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
    <List.Item
      title={item.name}
      description={`${item.description} - $${item.value}`}
      left={() => <List.Image style={styles.image} source={{ uri: item.image }} />}
      onPress={() => navigation.navigate('ItemDetails', { item })}
      style={styles.listItem}
      titleStyle={styles.itemTitle}
      descriptionStyle={styles.itemDescription}
    />
  );

  const _handleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) setSearchQuery('');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        {searchVisible ? (
          <Searchbar
            placeholder="Buscar"
            onChangeText={setSearchQuery}
            value={searchQuery}
            autoFocus={true}
            style={styles.searchBar}
            iconColor="#fff"
            inputStyle={styles.searchInput}
          />
        ) : (
          <Appbar.Content title="Artículos" titleStyle={styles.appBarTitle} />
        )}
        <Appbar.Action icon="magnify" onPress={_handleSearch} color="#fff" />
      </Appbar.Header>
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
  },
  appBar: {
    backgroundColor: '#6a1b9a',
  },
  appBarTitle: {
    color: '#fff',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#7b1fa2',
    color: '#fff',
  },
  searchInput: {
    color: '#fff',
  },
  listItem: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
  },
  itemTitle: {
    color: '#4a148c',
    fontWeight: 'bold',
  },
  itemDescription: {
    color: '#7b1fa2',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default ItemList;