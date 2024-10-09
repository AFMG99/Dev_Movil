import React, { useState, useContext, useEffect } from 'react';
import { View, FlatList, Text, TextInput, Button, Alert } from 'react-native';
import { List } from 'react-native-paper';
import screenStyles from '../styles/screenStyles';
import globalStyles from '../styles/globalStyles';
import paymentBranchStyles from '../styles/paymentBranchStyles'
import Context from '../context/Context';
import PaymentBranch from '../components/PaymentBranch';

const PaymentBranchScreen = ({ navigation, route }) => {
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [expanded, setExpanded] = useState(false);
    const { state, dispatch} = useContext(Context);
    const { item } = route.params;

    const handlePress = () => setExpanded(!expanded);

    useEffect( () => {
        dispatch({ type: 'GET_TOTAL'});
    }, [state.items]);

    const handlePayment = () => {
        Alert.alert(
            'Simulación de pago',
            `Dirección: ${address}\nForma de pago: ${paymentMethod}\nValor total: ${state.totalValue}`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        dispatch({
                            type: 'ADD_PURCHASES',
                            payload: state.items.filter(product => product.isSelected),
                        })
                        askToViewPurchases();
                    },
                },
            ]
        );
    };

    const askToViewPurchases = () => {
        Alert.alert(
            '¿Ver compras realizadas?',
            '¿Te gustaría ver las compras que has realizado?',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Permanecer en PaymentBranch'),
                    style: 'cancel',
                },
                {
                    text: 'Sí',
                    onPress: () => navigation.navigate('PurchasesScreen'),
                },
            ]
        );
    };

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyles.headerText}>Sucursal de pago</Text>
            </View>
            <FlatList
                data={state.items.filter(product => product.isSelected)}
                renderItem={({ item }) => (
                    <PaymentBranch
                        item = {item}
                        onIncrease = {() => dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })}
                        onDecrease = {() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}
                    />
                )}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={
                    <View style={paymentBranchStyles.footer}>
                        <Text style={paymentBranchStyles.total}>Valor total: ${state.totalValue}</Text>
                        <TextInput
                            style={globalStyles.textInput}
                            placeholder="Dirección de entrega"
                            maxLength={30}
                            value={address}
                            onChangeText={setAddress}
                        />
                        <List.Accordion
                            title={paymentMethod ? paymentMethod : "Seleccione un método de pago"}
                            expanded={expanded}
                            onPress={handlePress}
                            style={paymentBranchStyles.accordion}
                        >
                            <List.Item
                                title="🅿️ - PSE"
                                onPress={() => {
                                    setPaymentMethod("PSE");
                                    setExpanded(false);
                                }}
                            />
                            <List.Item
                                title="💳 - Tarjeta de crédito"
                                onPress={() => {
                                    setPaymentMethod("Tarjeta de crédito");
                                    setExpanded(false);
                                }}
                            />
                            <List.Item
                                title="💸 - Efecty"
                                onPress={() => {
                                    setPaymentMethod("Efecty");
                                    setExpanded(false);
                                }}
                            />
                        </List.Accordion>
                        <Button
                            title="Simular pago"
                            onPress={handlePayment}
                            color="#7B1FA2"
                        />
                    </View>
                }
            />
        </View>
    );
};

export default PaymentBranchScreen;