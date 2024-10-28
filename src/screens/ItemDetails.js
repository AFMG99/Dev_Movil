import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, ScrollView, TextInput, Alert, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../styles/globalStyles';
import screenStyles from '../styles/screenStyles';
import ItemDetailsStyles from '../styles/ItemDetailsStyles';
import Context from '../context/Context';
import db from '@react-native-firebase/firestore';

const ItemDetails = ({ route }) => {
    const { itemId } = route.params;
    const [fullItem, setFullItem] = useState({});
    const [questions, setQuestions] = useState('');
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState(0);
    const [ratingComment, setRatingComment] = useState('');
    const navigation = useNavigation();
    const { dispatch } = useContext(Context);

    useEffect(() => {
        const subscriber = db().collection('items').doc(itemId).onSnapshot(doc => {
            if (doc.exists) {
                setFullItem({ id: doc.id, ...doc.data() });
            } else {
                console.error('El documento no existe');
            }
        }, error => console.error('Error al cargar los detalles del artículo:', error));

        return () => subscriber();
    }, [itemId]);

    const handleSubmitQuestion = async () => {
        try {
            await db().collection('questions').add({
                itemId: fullItem.id,
                question: questions,
                createdAt: new Date(),
            });
            Alert.alert('Pregunta enviada:', questions);
            setQuestions('');
        } catch (error) {
            console.error('Error al enviar pregunta:', error);
            Alert.alert('Error', 'No se pudo enviar la pregunta. Inténtalo de nuevo más tarde.');
        }
    };

    const handleSubmitComment = async () => {
        try {
            await db().collection('comments').add({
                itemId: fullItem.id,
                comment: comments,
                createdAt: new Date(),
            });
            Alert.alert('Comentario enviado:', comments);
            setComments('');
        } catch (error) {
            console.error('Error al enviar comentario:', error);
            Alert.alert('Error', 'No se pudo enviar el comentario. Inténtalo de nuevo más tarde.');
        }
    };

    const handleRating = (value) => {
        setRating(value);
        if (value >= 3) {
            dispatch({
                type: 'ADD_TO_FAVORITE',
                payload: { ...fullItem, rating: value, ratingComment }
            });
            Alert.alert('Producto guardado', 'El producto ha sido guardado como favorito.');
        } else {
            Alert.alert('Calificación baja', 'La calificación es menor a 3.');
        }
    };

    return (
        <View style={ItemDetailsStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyle.headerText}>Detalles del producto</Text>
            </View>
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={ItemDetailsStyles.itemContainer}>
                    <Pressable
                        style={ItemDetailsStyles.cartIcon}
                        onPress={() => {
                            dispatch({ type: 'ADD_ITEM', payload: { ...fullItem, count: 1 } });
                            navigation.navigate('ShoppingCartScreen');
                        }}
                    >
                        <Text style={ItemDetailsStyles.emoji}>🛒</Text>
                    </Pressable>
                    {fullItem.image ? (
                        <Image
                            source={{ uri: fullItem.image }}
                            style={ItemDetailsStyles.image}
                        />
                    ) : (
                        <Text>Imagen no disponible</Text>
                    )}
                    <Text style={ItemDetailsStyles.title}>{fullItem.name}</Text>
                    <Text style={ItemDetailsStyles.description}>{fullItem.description}</Text>
                    <Text style={ItemDetailsStyles.value}>Valor: ${fullItem.value}</Text>
                    
                    <TextInput
                        style={globalStyle.input}
                        placeholder="Agregar una pregunta al vendedor"
                        maxLength={100}
                        value={questions}
                        onChangeText={setQuestions}
                    />
                    <Pressable style={globalStyle.button} onPress={handleSubmitQuestion}>
                        <Text style={globalStyle.buttonText}>Enviar Pregunta</Text>
                    </Pressable>

                    <TextInput
                        style={globalStyle.input}
                        placeholder="Agregar un comentario"
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
                </View>
            </ScrollView>
        </View>
    );
};

export default ItemDetails;