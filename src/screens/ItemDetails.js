import React, { useState, useContext } from 'react';
import { View, Text, Image, ScrollView, TextInput, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../styles/globalStyles'
import screenStyles from '../styles/screenStyles';
import ItemDetailsStyles from '../styles/ItemDetailsStyles'
import Context from '../context/Context';

const ItemDetails = ({ route }) => {
    const { item } = route.params;
    const [questions, setQuestions] = useState('');
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState(0);
    const [ratingComment, setRatingComment] = useState('');
    const navigation = useNavigation();
    const { dispatch } = useContext(Context);
    

    const handleSubmitQuestion = () => {
        Alert.alert('Pregunta enviada:', questions);
    };

    const handleSubmitComment = () => {
        Alert.alert('Comentario enviado:', comments);
    };

    const handleRating = (value) => {
        setRating(value);
        if (value >= 3) {
            dispatch({ 
                type: 'ADD_TO_FAVORITE', 
                payload: { ...item, rating: value, ratingComment }
            });
            Alert.alert('Producto guardado','El producto ha sido guardado como favorito.')
        }else{
            Alert.alert('Calificación baja', 'La calificación es menor a 3.')
        }
    };

    return (
        <View style={ItemDetailsStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyle.headerText}>Detalles del producto</Text>
            </View>
            <ScrollView >
                <View style={ItemDetailsStyles.itemContainer}>
                    <Pressable 
                        style={ItemDetailsStyles.cartIcon} 
                        onPress={() => { 
                            dispatch({ type: 'ADD_ITEM', payload: {...item, count: 1}});
                            console.log('Artículo agregado al carrito', item.name)
                            navigation.navigate('ShoppingCartScreen')
                        }}
                    >
                        <Text style={ItemDetailsStyles.emoji}>🛒</Text>
                    </Pressable>
                    <Image
                        source={{ uri: item.image }}
                        style={ItemDetailsStyles.image}
                    />
                    <Text style={ItemDetailsStyles.title}>{item.name}</Text>
                    <Text style={ItemDetailsStyles.description}>{item.description}</Text>
                    <Text style={ItemDetailsStyles.value}>Valor: ${item.value}</Text>
                    <Text style={ItemDetailsStyles.characteristicsTitle}>Características del Producto:</Text>
                    <Text style={ItemDetailsStyles.characteristics}>Información adicional del producto...</Text>

                    <View style={ItemDetailsStyles.paymentMethodsContainer}>
                        <Text style={ItemDetailsStyles.paymentMethodsTitle}>Medios de Pago Aceptados:</Text>
                        <View style={ItemDetailsStyles.paymentIcons}>
                            <Text style={ItemDetailsStyles.emoji}>💳</Text>
                            <Text style={ItemDetailsStyles.emoji}>💸</Text>
                            <Text style={ItemDetailsStyles.emoji}>🅿️</Text>
                        </View>
                    </View>

                    <TextInput
                        style={globalStyle.input}
                        placeholder="Agregar una pregunta al vendedor (máximo 100 caracteres)"
                        maxLength={100}
                        value={questions}
                        onChangeText={setQuestions}
                    />
                    <Pressable style={globalStyle.button} onPress={handleSubmitQuestion}>
                        <Text style={globalStyle.buttonText}>Enviar Pregunta</Text>
                    </Pressable>

                    <TextInput
                        style={globalStyle.input}
                        placeholder="Agregar un comentario (máximo 200 caracteres)"
                        maxLength={200}
                        value={comments}
                        onChangeText={setComments}
                    />
                    <Pressable style={globalStyle.button} onPress={handleSubmitComment}>
                        <Text style={globalStyle.buttonText}>Enviar Comentario</Text>
                    </Pressable>

                    <Text style={ItemDetailsStyles.ratingTitle}>Calificación:</Text>
                    <View style={ItemDetailsStyles.starsContainer}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Pressable key={star} onPress={() => handleRating(star)}>
                                <Text style={ItemDetailsStyles.emoji}>{star <= rating ? '⭐' : '⚪'}</Text>
                            </Pressable>
                        ))}
                    </View>
                    {rating > 0 && (
                        <TextInput
                            style={globalStyle.input}
                            placeholder="Agregar comentario para la calificación (opcional)"
                            maxLength={200}
                            value={ratingComment}
                            onChangeText={setRatingComment}
                        />
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

export default ItemDetails;
