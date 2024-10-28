import React, { useContext, useEffect, useState } from "react";
import { Button, StatusBar, Text, View, Alert, Pressable } from "react-native";
import { TextInput } from 'react-native-paper';
import globalStyles from '../styles/globalStyles';
import Context from "../context/Context";
import db from '@react-native-firebase/firestore';

const Login = ({ navigation, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        if (state.isAuthenticated) {
            Alert.alert("Inicio de sesión exitoso", "Has iniciado sesión correctamente.");
            onLogin();
        }
    }, [state.isAuthenticated, onLogin]);

    const handleLogin = async () => {
        setUsernameError('');
        setPasswordError('');

        if (!username) {
            setUsernameError("Usuario es requerido");
            return;
        }

        if (!password) {
            setPasswordError('Contraseña requerida');
            return;
        }

        try {
            const usersSnapshot = await db()
                .collection('users')
                .where('userName', '==', username)
                .where('password', '==', password)
                .get();

            if (!usersSnapshot.empty) {
                const userData = usersSnapshot.docs[0].data();
                dispatch({ type: 'VALIDATE_USER', payload: userData });

                Alert.alert('Inicio de sesión exitoso', 'Has iniciado sesión correctamente.');
                onLogin();
            } else {
                Alert.alert('Error', 'Usuario o contraseña incorrectos.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión.');
        }
    };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerWave}>
                <Text style={globalStyles.headerText}>Bienvenido</Text>
            </View>

            <View style={globalStyles.login}>
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
                    maxLength={8}
                    error={!!passwordError}
                />
                {!!passwordError && <Text style={globalStyles.errorText}>{passwordError}</Text>}

                <Pressable
                    onPress={() => navigation.navigate('UserRegistration')}
                    style={{ alignSelf: 'center', marginVertical: 8 }}>
                    <Text style={globalStyles.registerText}>¿No tienes una cuenta? Regístrate</Text>
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

export default Login;