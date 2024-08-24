import React from "react";
import { View, StyleSheet, Alert, Text } from 'react-native';
import { Avatar, TextInput, Button } from "react-native-paper";
import { user } from "./Components/database";
import screenStyles from "../styles/screenStyles";
import globalStyle from "../styles/globalStyles"
import profileStyles from "../styles/profileStyles";

const Profile = () => {

    return (
        <View style={profileStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyle.headerText}>Detalles del producto</Text>
            </View>
            <Avatar.Image
                size={100}
                source={{ uri: user.photo }}
                style={profileStyles.avatar}
            />

            <TextInput
                label="Nombre"
                value={user.firstName}
                style={profileStyles.input}
                editable={false}
            />

            <TextInput
                label="Apellido"
                value={user.lastName}
                style={profileStyles.input}
                editable={false}
            />

            <TextInput
                label="Fecha de Nacimiento"
                value={user.birthDate}
                style={profileStyles.input}
                editable={false}
            />

            <Button
                mode="contained"
                style={profileStyles.button}
                onPress={() => Alert.alert('Editar perfil')}
            >
                Editar Perfil
            </Button>
        </View>
    );
};

export default Profile;