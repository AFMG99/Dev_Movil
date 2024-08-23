import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TextInput, Button, Image, Alert } from 'react-native';
import { IconButton, List } from 'react-native-paper';
import { items as initialItems } from './Components/database';

const PaymentBranch = ({ navigation }) => {
    const [items, setItems] = useState(initialItems);
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('null');
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
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.value}</Text>
                <View style={styles.quantityContainer}>
                    <IconButton
                        icon="minus"
                        onPress={() => setItems(items.map(itm => itm.id === item.id ? { ...itm, quantity: Math.max(1, itm.quantity - 1) } : itm))}
                        size={20}
                    />
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <IconButton
                        icon="plus"
                        onPress={() => setItems(items.map(itm => itm.id === item.id ? { ...itm, quantity: Math.min(99, itm.quantity + 1) } : itm))}
                        size={20}
                    />
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={
                    <View style={styles.footer}>
                        <Text style={styles.total}>Valor total: ${getTotalValue()}</Text>
                        <TextInput
                            style={styles.addressInput}
                            placeholder="Dirección de entrega"
                            maxLength={30}
                            value={address}
                            onChangeText={setAddress}
                        />
                        <List.Accordion
                            title={paymentMethod ? paymentMethod : "Seleccione un método de pago"}
                            expanded={expanded}
                            onPress={handlePress}
                            style={styles.accordion}
                        >
                            <List.Item
                                title="PSE"
                                onPress={() => {
                                    setPaymentMethod("PSE");
                                    setExpanded(false);
                                }}
                            />
                            <List.Item
                                title="Tarjeta de crédito"
                                onPress={() => {
                                    setPaymentMethod("Tarjeta de crédito");
                                    setExpanded(false);
                                }}
                            />
                            <List.Item
                                title="Efecty"
                                onPress={() => {
                                    setPaymentMethod("Efecty");
                                    setExpanded(false);
                                }}
                            />
                        </List.Accordion>
                        <Button
                            title="Simular pago"
                            onPress={handlePayment}
                            color="#6200ee"
                        />
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6200ee',
        marginTop: 4,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    quantity: {
        fontSize: 16,
        marginHorizontal: 10,
        minWidth: 30,
        textAlign: 'center',
        color: '#333',
    },
    footer: {
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    addressInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 8,
        fontSize: 14,
        padding: 4,
        width: '100%',
    },
    accordion: {
        width: '100%',
        marginVertical: 8,
        backgroundColor: 'white'
    },
});

export default PaymentBranch;