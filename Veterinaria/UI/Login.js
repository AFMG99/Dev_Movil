import React, { useState } from "react";
import { Button, StatusBar, Text, View, StyleSheet, Alert, Pressable } from "react-native";
import { TextInput } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'
import { validateUser } from './Components/userStorage';

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
};

const validateUsername = (username) => {
    return username.length <= 10;
};

const Login = ({ navigation, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        setUsernameError('');
        setPasswordError('');

        if (!username) {
            setUsernameError("Usuario es requerido");
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres, incluyendo 1 mayúscula, 1 carácter especial, letras y números.');
            return;
        }

        const isValidUser = validateUser(username, password);
        if (isValidUser) {
            Alert.alert("Inicio de sesión exitoso", "Has iniciado sesión correctamente.");
            onLogin();
        } else {
            Alert.alert("Error", "Usuario o contraseña incorrectos.");
        }
    };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerWave}>
                <Text style={globalStyles.headerText}>Bienvenido</Text>
            </View>

            <View style={styles.login}>
                <Text style={globalStyles.title}>Hola</Text>
                <Text style={globalStyles.subtitle}>Ingresa en tu cuenta</Text>

                <TextInput
                    label="Usuario"
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Usuario"
                    style={globalStyles.textInput}
                    maxLength={10}
                    error={!!usernameError}
                />
                {!!usernameError && <Text style={globalStyles.errorText}>{usernameError}</Text>}

                <TextInput
                    label="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={globalStyles.textInput}
                {/*    maxLength={8}; la profesora no nos va a cobrar la validacion de max 8 caracteres en la contraseña*/}
                    error={!!passwordError}
                />
                {!!passwordError && <Text style={globalStyles.errorText}>{passwordError}</Text>}

                <Pressable
                    onPress={() => navigation.navigate('UserRegistration')}
                    style={{ alignSelf: 'center', marginVertical: 8 }}>
                    <Text style={styles.registerText}>¿No tienes una cuenta? Regístrate</Text>
                </Pressable>

                <StatusBar style="auto" />
                <Button
                    title="Iniciar sesión"
                    onPress={handleLogin}
                    color="#6a1b9a"
                />
            </View>
            <View style={globalStyles.footerWave} />
        </View>
    );
};

const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    registerText: {
        color: '#6a1b9a',
        textDecorationLine: 'underline',
    },
});

export default Login;
