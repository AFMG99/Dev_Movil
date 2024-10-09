import React, { useState } from 'react';
import { View, TextInput, Text, Alert, ScrollView, Pressable } from 'react-native';
import { List, Snackbar } from "react-native-paper";
import globalStyles from '../styles/globalStyles';
import screenStyles from '../styles/screenStyles';
import PQRStyles from '../styles/PQRStyles';

const PQR = () => {
    const [requestType, setRequestType] = useState('');
    const [description, setDescription] = useState('');
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const onDismissSnackBar = () => setVisible(false);

    const handleSubmit = () => {
        if (requestType && (description.length > 0 && description.length <= 300)) {
            setVisible(true)
            setDescription('')
        } else {
            Alert.alert('Error', 'Por favor, completa todos los campos correctamente.');
        }
    };

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyles.headerText}>PQR</Text>
            </View>
            <ScrollView contentContainerStyle={PQRStyles.scrollContainer}>
                <View style={PQRStyles.container}>

                    <Text style={PQRStyles.label}>Tipo de solicitud:</Text>
                    <List.Accordion
                        title={requestType || "Selecciona una opción"}
                        expanded={expanded}
                        onPress={handlePress}
                        style={PQRStyles.accordion}
                        titleStyle={PQRStyles.accordionTitle}
                    >
                        <List.Item
                            title="Queja"
                            onPress={() => {
                                setRequestType('Queja');
                                setExpanded(false);
                            }}
                            titleStyle={PQRStyles.listItem}
                        />
                        <List.Item
                            title="Petición"
                            onPress={() => {
                                setRequestType('Petición');
                                setExpanded(false);
                            }}
                            titleStyle={PQRStyles.listItem}
                        />
                        <List.Item
                            title="Recurso"
                            onPress={() => {
                                setRequestType('Recurso');
                                setExpanded(false);
                            }}
                            titleStyle={PQRStyles.listItem}
                        />
                    </List.Accordion>

                    <Text style={PQRStyles.label}>Descripción de la solicitud:</Text>
                    <TextInput
                        style={PQRStyles.textInput}
                        multiline
                        maxLength={300}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Escribe tu solicitud aquí..."
                        placeholderTextColor="#D1C4E9"
                    />

                    <Pressable style={PQRStyles.submitButton} onPress={handleSubmit}>
                        <Text style={PQRStyles.submitButtonText}>Enviar solicitud</Text>
                    </Pressable>

                    <Snackbar
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                        duration={Snackbar.DURATION_MEDIUM}
                        style={PQRStyles.snackbar}
                    >
                        Solicitud enviada con éxito
                    </Snackbar>
                </View>
            </ScrollView>
        </View>
    );
};

export default PQR;
