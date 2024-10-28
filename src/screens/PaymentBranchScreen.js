import React, { useState, useContext, useEffect } from 'react';
import { View, FlatList, Text, TextInput, Button, Alert, Image, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import screenStyles from '../styles/screenStyles';
import globalStyles from '../styles/globalStyles';
import paymentBranchStyles from '../styles/paymentBranchStyles';
import Context from '../context/Context';
import PaymentBranch from '../components/PaymentBranch';
import { fetchPaymentMethods } from '../services/MPIntegration';

const PaymentBranchScreen = ({ navigation, route }) => {
    const [address, setAddress] = useState('');
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [expanded, setExpanded] = useState(false);
    const { state, dispatch } = useContext(Context);
    
    const items = route.params.items;

    useEffect(() => {
        dispatch({ type: 'GET_TOTAL' });
        fetchPaymentMethods().then(methods => {
            const uniqueMethods = [...new Map(methods.map(method => [method.id, method])).values()];
            setPaymentMethods(uniqueMethods);
        });
    }, [state.items]);

    const handlePress = () => setExpanded(!expanded);

    const handlePayment = () => {
        Alert.alert(
            'Simulación de pago',
            `Dirección: ${address}\nForma de pago: ${selectedPaymentMethod}\nValor total: ${state.totalValue}`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        dispatch({ type: 'ADD_PURCHASES', payload: items });
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
                { text: 'No', style: 'cancel' },
                { text: 'Sí', onPress: () => navigation.navigate('PurchasesScreen') },
            ]
        );
    };

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyles.headerText}>Sucursal de pago</Text>
            </View>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <PaymentBranch
                        item={item}
                        onIncrease={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })}
                        onDecrease={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}
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
                            title={selectedPaymentMethod || "Seleccione un método de pago"}
                            expanded={expanded}
                            onPress={handlePress}
                            style={paymentBranchStyles.accordion}
                        >
                            {paymentMethods.map(method => (
                                <List.Item
                                    key={method.id}
                                    title={
                                        <View style={styles.paymentMethod}>
                                            <Image 
                                                source={{ uri: method.thumbnail }} 
                                                style={styles.thumbnail}
                                                resizeMode='contain'  
                                            />
                                            <View style={styles.methodInfo}>
                                                <Text style={styles.methodName}>{method.name}</Text>
                                                <Text style={styles.methodDetails}>
                                                    Tipo: {method.payment_type_id}
                                                </Text>
                                            </View>
                                        </View>
                                    }
                                    onPress={() => {
                                        setSelectedPaymentMethod(method.name);
                                        setExpanded(false);
                                    }}
                                />
                            ))}
                        </List.Accordion>
                        <Button 
                            title="Confirmar Pago" 
                            onPress={handlePayment} 
                        />
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 2,
        width: 300, 
        height: 80,
    },
    thumbnail: {
        width: '30%',
        height: '100%',
        resizeMode: 'contain',
        marginRight: 10,
    },
    methodInfo: {
        flex: 1,
    },
    methodName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    methodDetails: {
        color: 'gray',
        fontSize: 16,
    },
});

export default PaymentBranchScreen;