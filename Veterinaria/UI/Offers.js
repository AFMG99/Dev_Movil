import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { List } from "react-native-paper";
import { offers } from "./Components/database";

const Offers = () => {
    const renderItem = ({item}) => (
        <List.Item
            title = {item.name}
            description = {`${item.description} - Valor: $${item.value} - Descuento: ${item.discount}%`}
            left={() => <Image source={{uri: item.image}} style={styles.image}/>}
        />
    );

    return(
        <View style={styles.container}>
            <FlatList
                data={offers}
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
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
});

export default Offers;