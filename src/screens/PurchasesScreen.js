import React, { useContext } from "react";
import { View, Text, FlatList } from 'react-native';
import globalStyles from '../styles/globalStyles';
import screenStyles from "../styles/screenStyles";
import purchasesStyles from "../styles/purchasesStyles";
import Purchases from "../components/Purchases";
import Context from "../context/Context";

const PurchasesScreen = () => {
    const { state } = useContext(Context)

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={screenStyles.headerText}>Mis Compras</Text>
            </View>
            <FlatList
                data={state.purchases}
                renderItem={({ item }) => (
                    <Purchases
                        item = {item}
                    />
                )}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={purchasesStyles.listContent}
            />
        </View>
    );
};

export default PurchasesScreen;
