import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import globalStyles from '../styles/globalStyles';
import paymentBranchStyles from '../styles/paymentBranchStyles'

const PaymentBranch = ({ item, onIncrease, onDecrease }) => {
    return (
        <View style={paymentBranchStyles.itemContainer}>
            <Image source={{ uri: item.image }} style={paymentBranchStyles.image} />
            <View style={globalStyles.itemDetails}>
                <Text style={globalStyles.itemName}>{item.name}</Text>
                <Text style={globalStyles.itemDescription}>{item.description}</Text>
                <Text style={paymentBranchStyles.price}>${item.value}</Text>
                <View style={paymentBranchStyles.quantityContainer}>
                    <Pressable onPress={onDecrease}>
                        <Text style={globalStyles.emoji}>➖</Text>
                    </Pressable>
                    <Text style={paymentBranchStyles.quantity}>{item.count}</Text>
                    <Pressable onPress={onIncrease}>
                        <Text style={globalStyles.emoji}>➕</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default PaymentBranch