import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TextInput, Alert, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ItemDetails = ({ route }) => {
    const { item } = route.params;
    const [questions, setQuestions] = useState('');
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState(0);
    const [ratingComment, setRatingComment] = useState('');
    const navigation = useNavigation();

    const handleSubmitQuestion = () => {
        Alert.alert('Pregunta enviada:', questions);
    };

    const handleSubmitComment = () => {
        Alert.alert('Comentario enviado:', comments);
    };

    const handleRating = (value) => {
        setRating(value);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Pressable style={styles.cartIcon} onPress={() => navigation.navigate('ShoppingCart')}>
                <Icon name="cart" size={30} color="#000" />
            </Pressable>
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.value}>Valor: ${item.value}</Text>
                <Text style={styles.characteristicsTitle}>Características del Producto:</Text>
                <Text style={styles.characteristics}>Información adicional del producto...</Text>

                <View style={styles.paymentMethodsContainer}>
                    <Text style={styles.paymentMethodsTitle}>Medios de Pago Aceptados:</Text>
                    <View style={styles.paymentIcons}>
                        <Icon name="credit-card" size={30} color="#000" style={styles.paymentIcon} />
                        <Icon name="paypal" size={30} color="#000" style={styles.paymentIcon} />
                        <Icon name="cash" size={30} color="#000" style={styles.paymentIcon} />
                    </View>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Agregar una pregunta al vendedor (máximo 100 caracteres)"
                    maxLength={100}
                    value={questions}
                    onChangeText={setQuestions}
                />
                <Pressable style={styles.button} onPress={handleSubmitQuestion}>
                    <Text style={styles.buttonText}>Enviar Pregunta</Text>
                </Pressable>

                <TextInput
                    style={styles.input}
                    placeholder="Agregar un comentario (máximo 200 caracteres)"
                    maxLength={200}
                    value={comments}
                    onChangeText={setComments}
                />
                <Pressable style={styles.button} onPress={handleSubmitComment}>
                    <Text style={styles.buttonText}>Enviar Comentario</Text>
                </Pressable>

                <Text style={styles.ratingTitle}>Calificación:</Text>
                <View style={styles.starsContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Pressable key={star} onPress={() => handleRating(star)}>
                            <Icon
                                name={star <= rating ? 'star' : 'star-0'}
                                size={30}
                                color="#FFD700"
                            />
                        </Pressable>
                    ))}
                </View>
                {rating > 0 && (
                    <TextInput
                        style={styles.input}
                        placeholder="Agregar comentario para la calificación (opcional)"
                        maxLength={200}
                        value={ratingComment}
                        onChangeText={setRatingComment}
                    />
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        padding: 15,
    },
    cartIcon: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1,
    },
    itemContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6a1b9a',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 8,
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6a1b9a',
        marginBottom: 8,
    },
    characteristicsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a1b9a',
        marginTop: 16,
        marginBottom: 8,
    },
    characteristics: {
        fontSize: 14,
        color: '#555',
        marginBottom: 16,
    },
    paymentMethodsContainer: {
        alignItems: 'center',
        marginVertical: 16,
    },
    paymentMethodsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a1b9a',
        marginBottom: 8,
    },
    paymentIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    paymentIcon: {
        marginHorizontal: 10,
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginVertical: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    button: {
        backgroundColor: '#6a1b9a',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ratingTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a1b9a',
        marginVertical: 16,
    },
    starsContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
});

export default ItemDetails;
