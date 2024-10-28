import React from 'react'
import { View, Text, Image } from 'react-native';
import purchasesStyles from "../styles/purchasesStyles";

const Purchases = ({ item }) => {
    return (
        <View style={purchasesStyles.itemContainer}>
            <Image source={{ uri: item.image }} style={purchasesStyles.image} />
            <View style={purchasesStyles.detailsContainer}>
                <Text style={purchasesStyles.itemName}>{item.name}</Text>
                <Text style={purchasesStyles.itemDescription}>{item.description}</Text>
                <Text style={purchasesStyles.itemStatus}>{item.condition}</Text>
            </View>
        </View>
    )
}

export default Purchases