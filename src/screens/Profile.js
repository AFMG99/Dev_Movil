import React, { useContext, useState } from "react";
import { View, Alert, Text } from 'react-native';
import { Avatar, TextInput, Button } from "react-native-paper";
import { user } from "../components/database";
import screenStyles from "../styles/screenStyles";
import globalStyle from "../styles/globalStyles"
import profileStyles from "../styles/profileStyles";
import TaskContext from "../context/Context";

const Profile = () => {
    const { dispatch } = useContext(TaskContext);
    const [isEditUser, setIsEditUser] = useState(false);
    const [editUser, setEditUser] = useState({ 
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: user.birthDate,
    });

    const handleEdit = () => {
        if (isEditUser) {
            dispatch({ type: 'UPDATE_USER', payload: editUser })
            Alert.alert('Perfil actualizado', 'Los detalles del perfil han sido actulizados.')
        }
        setIsEditUser(!isEditUser);
    }

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
                value={editUser.firstName}
                style={profileStyles.input}
                onChangeText={(text) => setEditUser({ ...editUser, firstName: text })}
                editable={isEditUser}
            />

            <TextInput
                label="Apellido"
                value={editUser.lastName}
                style={profileStyles.input}
                onChangeText={(text) => setEditUser({ ...editUser, lastName: text })}
                editable={isEditUser}
            />

            <TextInput
                label="Fecha de Nacimiento"
                value={editUser.birthDate}
                style={profileStyles.input}
                onChangeText={(text) => setEditUser({ ...editUser, birthDate: text })}
                editable={isEditUser}
            />

            <Button
                mode="contained"
                style={profileStyles.button}
                onPress={handleEdit}
            >
                {isEditUser ? "Guardar Cambios" : "Editar Perfil"}
            </Button>
        </View>
    );
};

export default Profile;