import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { List } from "react-native-paper";
import { purchases } from "./Components/database";

const Purchases = ({navigation}) => {
    const renderItem = ({ item }) => (
        <List.Item
            title={item.name}
            description={`${item.description} - Estado: ${item.status}`}
            left={() => <Image source={{ uri: item.image }} style={styles.image} />}
            right={() => <Text style={styles.status}>{item.status}</Text>}
        />
    );
    return(
        <View style={styles.container}>
        <FlatList
            data={purchases}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        margin: 15,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    status: {
        alignSelf: 'center',
        color: '#888',
    },
});

export default Purchases;