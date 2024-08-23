import React from "react";
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Avatar, TextInput, Button } from "react-native-paper";

const Profile = () => {
    const user = {
        firstName: 'Juan',
        lastName: 'Pérez',
        birthDate: '15/08/1985',
        photo: 'https://example.com/photo.jpg'
    };

    return (
        <View style={styles.container}>
            <Avatar.Image
                size={100}
                source={{ uri: user.photo }}
                style={styles.avatar}
            />

            <TextInput
                label="Nombre"
                value={user.firstName}
                style={styles.input}
                editable={false}
            />

            <TextInput
                label="Apellido"
                value={user.lastName}
                style={styles.input}
                editable={false}
            />

            <TextInput
                label="Fecha de Nacimiento"
                value={user.birthDate}
                style={styles.input}
                editable={false}
            />

            <Button
                mode="contained"
                style={styles.button}
                onPress={() => Alert.alert('Editar perfil')}
            >
                Editar Perfil
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        marginBottom: 16,
    },
    input: {
        width: '100%',
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
    },
});

export default Profile;