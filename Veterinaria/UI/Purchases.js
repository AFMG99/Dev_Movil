import React from "react";
import { View, Text, FlatList, Image } from 'react-native';
import { purchases } from "./Components/database";
import globalStyles from '../styles/globalStyles';
import screenStyles from "../styles/screenStyles";
import purchasesStyles from "../styles/purchasesStyles";

const Purchases = () => {
    const renderItem = ({ item }) => (
        <View style={purchasesStyles.itemContainer}>
            <Image source={{ uri: item.image }} style={purchasesStyles.image} />
            <View style={purchasesStyles.detailsContainer}>
                <Text style={purchasesStyles.itemName}>{item.name}</Text>
                <Text style={purchasesStyles.itemDescription}>{item.description}</Text>
                <Text style={purchasesStyles.itemStatus}>{item.status}</Text>
            </View>
        </View>
    );

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={screenStyles.headerText}>Mis Compras</Text>
            </View>
            <FlatList
                data={purchases}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={purchasesStyles.listContent}
            />
        </View>
    );
};

export default Purchases;
