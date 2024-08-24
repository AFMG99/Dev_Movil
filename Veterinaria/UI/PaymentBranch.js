import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, Button, Image, Alert, Pressable } from 'react-native';
import { List } from 'react-native-paper';
import { items as initialItems } from './Components/database';
import screenStyles from '../styles/screenStyles';
import globalStyles from '../styles/globalStyles';
import paymentBranchStyles from '../styles/paymentBranchStyles'

const PaymentBranch = ({ navigation }) => {
    const [items, setItems] = useState(initialItems);
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded);

    const getTotalValue = () => {
        return items.reduce((total, item) => total + item.value * item.quantity, 0);
    };

    const handlePayment = () => {
        Alert.alert(
            'Simulación de pago',
            `Dirección: ${address}\nForma de pago: ${paymentMethod}\nValor total: ${getTotalValue()}`,
            [
                {
                    text: 'OK',
                    onPress: () => {
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
                    onPress: () => navigation.navigate('Purchases'),
                },
            ]
        );
    };

    const renderItem = ({ item }) => (
        <View style={paymentBranchStyles.itemContainer}>
            <Image source={{ uri: item.image }} style={paymentBranchStyles.image} />
            <View style={globalStyles.itemDetails}>
                <Text style={globalStyles.itemName}>{item.name}</Text>
                <Text style={globalStyles.itemDescription}>{item.description}</Text>
                <Text style={paymentBranchStyles.price}>${item.value}</Text>
                <View style={paymentBranchStyles.quantityContainer}>
                    <Pressable onPress={() => setItems(items.map(itm => itm.id === item.id ? { ...itm, quantity: Math.max(1, itm.quantity - 1) } : itm))}>
                        <Text style={globalStyles.emoji}>➖</Text>
                    </Pressable>
                    <Text style={paymentBranchStyles.quantity}>{item.quantity}</Text>
                    <Pressable onPress={() => setItems(items.map(itm => itm.id === item.id ? { ...itm, quantity: Math.min(99, itm.quantity + 1) } : itm))}>
                        <Text style={globalStyles.emoji}>➕</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyles.headerText}>Sucursal de pago</Text>
            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={
                    <View style={paymentBranchStyles.footer}>
                        <Text style={paymentBranchStyles.total}>Valor total: ${getTotalValue()}</Text>
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

export default PaymentBranch;