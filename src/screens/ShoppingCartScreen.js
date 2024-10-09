import React, { useContext, useEffect } from "react";
import { View, FlatList, Button, Text, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import screenStyles from "../styles/screenStyles";
import shoppingCartStyles from '../styles/shoppingCartStyles';
import Context from "../context/Context";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartScreen = ({ navigation }) => {
    const { state, dispatch } = useContext(Context);
    
    useEffect( () => {
        dispatch({type: 'GET_TOTAL'});
    }, [state.items]);

    handlePayment = () => {
        const selectedItems = state.items.filter(item => item.isSelected)
        if (selectedItems.length === 0) {
            Alert.alert('No hay productos seleccionados', 'Por favor, seleccione al menos un producto.')
            return
        }
        navigation.navigate('PaymentBranch', { item: selectedItems })
    }

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyles.headerText}>Carrito de compras</Text>
            </View>
            <FlatList
                data={state.items}
                renderItem={({item}) => (
                    <ShoppingCart
                        item = {item}
                        onIncrease = {() => dispatch({type: 'INCREASE_QUANTITY', payload: item.id })}
                        onDecrease = {() => dispatch({type: 'DECREASE_QUANTITY', payload: item.id })}
                        onDelete = {() => dispatch({type: 'DELETE_ITEM', payload: item.id })}
                        onSelect = {() => dispatch({type: 'SELECT_ITEM', payload: item.id })}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                ListFooterComponent={
                    <View style={shoppingCartStyles.footer}>
                        <Text style={shoppingCartStyles.total}>Valor total: ${state.totalValue}</Text>
                        <Button 
                            onPress={handlePayment}
                            title="Proceder al pago"
                            color="#7B1FA2"
                        />
                    </View>
                }
            />
        </View>
    );
};

export default ShoppingCartScreen;
