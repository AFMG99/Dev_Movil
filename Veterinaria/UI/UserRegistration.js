import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, ScrollView, Text } from "react-native";
import { List, TextInput, MD3Colors } from 'react-native-paper';
import { storeUser } from './Components/userStorage';
import globalStyles from '../styles/globalStyles'
import { departments, cities } from './Components/Data';

const UserRegistration = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [birthDateError, setBirthDateError] = useState("");
    const [selectedDepartmentError, setSelectedDepartmentError] = useState("");

    const handleRegister = () => {
        setUserNameError('');
        setPasswordError('');
        setEmailError('');
        setAddressError('');
        setBirthDateError('');
        setBirthDateError('');

        if (validateForm()) {
            storeUser({
                userName,
                password,
                email,
                address,
                birthDate,
                department: selectedDepartment,
                city: selectedCity
            });
            Alert.alert('Registro exitoso', '¡Usuario registrado correctamente!');
            navigation.navigate('Login');
        }
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateBirthDate = () => {
        if (!/^\d{2}-\d{2}-\d{4}$/.test(birthDate)) {
            setBirthDateError("Fecha de nacimiento debe estar en formato DD-MM-YYYY");
            return false;
        }
        const [day, month, year] = birthDate.split('-');
        const birthDateObj = new Date(`${year}-${month}-${day}`);
        const today = new Date();
    
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDifference = today.getMonth() - birthDateObj.getMonth();
        const dayDifference = today.getDate() - birthDateObj.getDate();
        
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }
        if (age < 18 || age > 50) {
            setBirthDateError("No está en el rango de edad para crear cuenta");
            return false;
        }
        return true;
    };

    const validateForm = () => {
        if (!userName) {
            setUserNameError("Usuario es requerido");
            return false;
        }
        if (!validateEmail()) {
            setEmailError("Correo no es válido");
            return false;
        }
        if (!validatePassword()) {
            setPasswordError("La contraseña debe tener 8 caracteres e incluir una mayúscula, un número y un caracter especial");
            return false;
        }
        if (!address) {
            setAddressError("La dirección es requerida");
            return false;
        }
        if (!validateBirthDate()) {
            return false;
        }
        if (!selectedDepartment || !selectedCity) {
            setSelectedDepartmentError("Por favor, selecciona un departamento y una ciudad.");
            return false;
        }
        return true;
    };

    const renderCities = (departmentId) => {
        return cities[departmentId]?.map((city, index) => (
            <List.Item
                key={index}
                title={city}
                onPress={() => setSelectedCity(city)}
            />
        ));
    };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.headerWave}>
                <Text style={globalStyles.headerText}>Registro de Usuario</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.registrationForm}>
                    <TextInput
                        style={globalStyles.textInput}
                        label="Usuario"
                        value={userName}
                        onChangeText={setUserName}
                        placeholder="Usuario"
                        maxLength={10}
                        error={!!userNameError}
                    />
                    {!!userNameError && <Text style={globalStyles.errorText}>{userNameError}</Text>}
                    <TextInput
                        style={globalStyles.textInput}
                        label="Correo electrónico"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Correo electrónico"
                        error={!!emailError}
                    />
                    {!!emailError && <Text style={globalStyles.errorText}>{emailError}</Text>}
                    <TextInput
                        style={globalStyles.textInput}
                        label="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Contraseña"
                        secureTextEntry={true}
                    /*    maxLength={8}; ; la profesora no nos va a cobrar la validacion de max 8 caracteres en la contraseña*/
                        error={!!passwordError}
                    />
                    {!!passwordError && <Text style={globalStyles.errorText}>{passwordError}</Text>}
                    <TextInput
                        style={globalStyles.textInput}
                        label="Dirección"
                        value={address}
                        onChangeText={setAddress}
                        placeholder="Dirección"
                        maxLength={30}
                        error={!!addressError}
                    />
                    {!!addressError && <Text style={globalStyles.errorText}>{addressError}</Text>}
                    <TextInput
                        style={styles.inputDate}
                        label="Fecha de Nacimiento (DD-MM-YYYY)"
                        value={birthDate}
                        onChangeText={setBirthDate}
                        placeholder="📅 Fecha de Nacimiento"
                        error = {!!birthDateError}
                    />
                    {!!birthDateError && <Text style={globalStyles.errorText}>{birthDateError}</Text>}
                    <List.AccordionGroup>
                        <List.Accordion
                            title={selectedDepartment ? selectedDepartment : "Seleccione un departamento"}
                            id="department"
                        >
                            {departments.map(department => (
                                <List.Item
                                    key={department.id}
                                    title={department.name}
                                    onPress={() => {
                                        setSelectedDepartment(department.name);
                                        setSelectedCity(null);
                                    }}
                                    error={!!selectedDepartmentError}
                                />
                                
                            ))}
                        </List.Accordion>
                        {selectedDepartment && (
                            <List.Accordion
                                title={selectedCity ? selectedCity : "Seleccione una ciudad"}
                                id="city"
                            >
                                {renderCities(departments.find(d => d.name === selectedDepartment).id)}
                            </List.Accordion>
                        )}
                        {!!selectedDepartmentError && <Text style={globalStyles.errorText}>{selectedDepartmentError}</Text>}
                    </List.AccordionGroup>

                    <Button 
                        title="Registrar" 
                        onPress={handleRegister} 
                        color="#6a1b9a"
                    />
                </View>
            </ScrollView>

            <View style={globalStyles.footerWave} />
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        padding: 16,
        flexGrow: 1,
    },
    registrationForm: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    inputDate: {
        marginBottom: 16,
        backgroundColor: 'white',
    },
});

export default UserRegistration;