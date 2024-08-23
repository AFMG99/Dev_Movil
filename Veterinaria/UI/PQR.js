import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, Alert } from 'react-native';
import { List, Snackbar } from "react-native-paper";

const PQR = () => {
    const [requestType, setRequestType] = useState('');
    const [description, setDescription] = useState('');
    const [visible, setVisible] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const onDismissSnackBar = () => setVisible(false);

    const handleSubmit = () => {
        if (requestType && description.length <= 300) {
            setVisible(true);
        } else {
            alert('Por favor, completa todos los campos correctamente.');
        }
    };

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Tipo de solicitud:</Text>

            <List.Accordion
                title={requestType || "Selecciona una opción"}
                expanded={expanded}
                onPress={handlePress}
            >
                <List.Item 
                    title="Queja" 
                    onPress={() => {
                        setRequestType('Queja');
                        setExpanded(false);
                    }} 
                />
                <List.Item 
                    title="Petición" 
                    onPress={() => {
                        setRequestType('Petición');
                        setExpanded(false);
                    }} 
                />
                <List.Item 
                    title="Recurso" 
                    onPress={() => {
                        setRequestType('Recurso');
                        setExpanded(false);
                    }} 
                />
            </List.Accordion>

            <Text style={styles.label}>Descripción de la solicitud:</Text>
            <TextInput
                style={styles.textInput}
                multiline
                maxLength={300}
                value={description}
                onChangeText={setDescription}
                placeholder="Escribe tu solicitud aquí..."
            />

            <Button 
                title="Enviar" 
                onPress={handleSubmit} 
            />

            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={Snackbar.DURATION_MEDIUM}
            >
                Solicitud enviada con éxito
            </Snackbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    textInput: {
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        marginBottom: 16,
    },
});

export default PQR;