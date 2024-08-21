import React, { useState } from "react";
import { TextInput, View, Button, Alert, Text, TouchableOpacity, FlatList, Modal, Picker } from 'react-native';

const departments = [
    { id: '1', name: 'Antioquia' },
    { id: '2', name: 'Cundinamarca' },
    { id: '3', name: 'Atlántico' },
    { id: '4', name: 'Bolívar' },
    { id: '5', name: 'Boyacá' },
    { id: '6', name: 'Caldas' },
    { id: '7', name: 'Caquetá' },
    { id: '8', name: 'Casanare' },
    { id: '9', name: 'Cauca' },
    { id: '10', name: 'Cesar' },
    { id: '11', name: 'Chocó' },
    { id: '12', name: 'Córdoba' },
    { id: '13', name: 'Guainía' },
    { id: '14', name: 'Guaviare' },
    { id: '15', name: 'Huila' },
    { id: '16', name: 'La Guajira' },
    { id: '17', name: 'Magdalena' },
    { id: '18', name: 'Meta' },
    { id: '19', name: 'Nariño' },
    { id: '20', name: 'Norte de Santander' },
    { id: '21', name: 'Putumayo' },
    { id: '22', name: 'Quindío' },
    { id: '23', name: 'Risaralda' },
    { id: '24', name: 'San Andrés y Providencia' },
    { id: '25', name: 'Santander' },
    { id: '26', name: 'Sucre' },
    { id: '27', name: 'Tolima' },
    { id: '28', name: 'Valle del Cauca' },
    { id: '29', name: 'Vaupés' },
    { id: '30', name: 'Vichada' },
  ];
  
  const cities = {
    '1': ['Medellín', 'Envigado', 'Itagüí', 'Bello', 'Rionegro'],
    '2': ['Bogotá', 'Soacha', 'Zipaquirá', 'Facatativá', 'Chía'],
    '3': ['Barranquilla', 'Soledad', 'Malambo', 'Puerto Colombia', 'Galapa'],
    '4': ['Cartagena', 'Magangué', 'Turbaco', 'Arjona', 'El Carmen de Bolívar'],
    '5': ['Tunja', 'Duitama', 'Sogamoso', 'Chiquinquirá', 'Puerto Boyacá'],
    '6': ['Manizales', 'Villamaría', 'Chinchiná', 'La Dorada', 'Riosucio'],
    '7': ['Florencia', 'San Vicente del Caguán', 'Puerto Rico', 'Cartagena del Chairá', 'El Doncello'],
    '8': ['Yopal', 'Aguazul', 'Villanueva', 'Monterrey', 'Tauramena'],
    '9': ['Popayán', 'Santander de Quilichao', 'Puerto Tejada', 'Piendamó', 'Patía'],
    '10': ['Valledupar', 'Aguachica', 'Bosconia', 'Codazzi', 'Curumaní'],
    '11': ['Quibdó', 'Istmina', 'Tadó', 'Condoto', 'Bahía Solano'],
    '12': ['Montería', 'Lorica', 'Sahagún', 'Cereté', 'Montelíbano'],
    '13': ['Inírida', 'Puerto Colombia', 'La Guadalupe', 'San Felipe', 'Cacahual'],
    '14': ['San José del Guaviare', 'El Retorno', 'Miraflores', 'Calamar', 'Chirajara'],
    '15': ['Neiva', 'Pitalito', 'Garzón', 'La Plata', 'Campoalegre'],
    '16': ['Riohacha', 'Maicao', 'Uribia', 'Fonseca', 'San Juan del Cesar'],
    '17': ['Santa Marta', 'Ciénaga', 'Fundación', 'El Banco', 'Aracataca'],
    '18': ['Villavicencio', 'Acacías', 'Granada', 'Puerto López', 'San Martín'],
    '19': ['Pasto', 'Tumaco', 'Ipiales', 'Túquerres', 'La Unión'],
    '20': ['Cúcuta', 'Ocaña', 'Pamplona', 'Villa del Rosario', 'Los Patios'],
    '21': ['Mocoa', 'Puerto Asís', 'Sibundoy', 'Orito', 'La Hormiga'],
    '22': ['Armenia', 'Calarcá', 'Montenegro', 'La Tebaida', 'Quimbaya'],
    '23': ['Pereira', 'Dosquebradas', 'Santa Rosa de Cabal', 'La Virginia', 'Belén de Umbría'],
    '24': ['San Andrés', 'Providencia', 'Santa Catalina'],
    '25': ['Bucaramanga', 'Floridablanca', 'Girón', 'Piedecuesta', 'Barrancabermeja'],
    '26': ['Sincelejo', 'Corozal', 'Sampués', 'San Marcos', 'Tolú'],
    '27': ['Ibagué', 'Espinal', 'Honda', 'Melgar', 'Líbano'],
    '28': ['Cali', 'Palmira', 'Buenaventura', 'Tuluá', 'Cartago'],
    '29': ['Mitú', 'Carurú', 'Taraira', 'Pacoa', 'Yavaraté'],
    '30': ['Puerto Carreño', 'La Primavera', 'Cumaribo', 'Santa Rosalía', 'Morichal']
  };
  
const UserRegistration = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('Colombia');
    const [birthDate, setBirthDate] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    
    const handleRegister = () => {
      if (validateForm()) {
            Alert.alert('Registro exitoso', '¡Usuario registrado correctamente!');
            navigation.navigate('Login');
        }
    };

    const validatePassword = () => {
        const passwordRegrex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegrex.test(password);
    };

    const validateEmail = () =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validateBirthDate = () =>{
        const birtDateObj = new Date(birthDate);
        const today = new Date();
        const age = today.getFullYear() - birtDateObj.getFullYear();
        const monthDifference = today.getMonth() - birtDateObj.getMonth();
        
        if (monthDifference < 0 ||(monthDifference === 0 && today.getDate() < birtDateObj.getDate())) {
            age--;
        }

        if (age < 18 || age > 50) {
            Alert.alert("No está en el rango de edad para crear cuenta");
            return false;
        }
    };

    const validateForm = () => {
        if (userName.length > 10) {
            Alert.alert("Usuario no debe exceder 10 caracteres");
            return false;
        }
        if (!validatePassword()) {
            Alert.alert("La contraseña debe tener 8 caracteres e incluir una mayúscula, un número y un caracter especial");
            return false;
        }
        if (!validateEmail()) {
            Alert.alert("Correo no es válido");
            return false;
        }
        if (!validateBirthDate()) {
            return false; 
        }
        if (address.length > 30) {
            Alert.alert("La dirección no debe exceder 30 caracteres");
            return false;
        }
        if (!selectedDepartment || !selectedCity) {
            Alert.alert("Por favor, selecciona un departamento y una ciudad.");
            return false;
        }

        return true;
    };

    return(
        <View>
            <TextInput
                label = "User Name"
                value={userName}
                onChangeText={userName}
                placeholder="User Name"
                maxLength={10}
            />
            <TextInput
                label = "Password"
                value={password}
                onChangeText={password}
                placeholder="Password"
                secureTextEntry
            />
            <TextInput
                label = "Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                placeholder="example@email.com"
            />
            <TextInput
                label = "Date of Birth"
                value={birthDate}
                onChangeText={setBirthDate}
                placeholder="DD-MM-YYYY"
            />
            <TextInput
                label = "Address"
                maxLength={30}
                value={address}
                onChangeText={setAddress}
                placeholder="Address"
            />
            <TextInput
                label = "Country"
                value={country}
                onChangeText={setCountry}
                placeholder="Country"
                editable={false}
            />
            <TouchableOpacity onPress={() => setIsDepartmentModalVisible(true)}>
                <Text>{selectedDepartment ? departments.find(d => d.id === selectedDepartment)?.name : "Selecciona un departamento"}</Text>
            </TouchableOpacity>

            <Modal
                isVisible={isDepartmentModalVisible}
                onBackdropPress={() => setIsDepartmentModalVisible(false)}
            >
                <View style={{ backgroundColor: 'white', padding: 20 }}>
                    <Picker
                        selectedValue={selectedDepartment}
                        onValueChange={(itemValue) => {
                            setSelectedDepartment(itemValue);
                            setSelectedCity(null); // Reset selected city when department changes
                            setIsDepartmentModalVisible(false);
                            setIsCityModalVisible(true);
                        }}
                    >
                        <Picker.Item label="Selecciona un departamento" value={null} />
                        {departments.map(department => (
                            <Picker.Item key={department.id} label={department.name} value={department.id} />
                        ))}
                    </Picker>
                </View>
            </Modal>

            {selectedDepartment && (
                <TouchableOpacity onPress={() => setIsCityModalVisible(true)}>
                    <Text>{selectedCity ? selectedCity : "Selecciona una ciudad"}</Text>
                </TouchableOpacity>
            )}

            <Modal
                isVisible={isCityModalVisible}
                onBackdropPress={() => setIsCityModalVisible(false)}
            >
                <View style={{ backgroundColor: 'white', padding: 20 }}>
                    <Picker
                        selectedValue={selectedCity}
                        onValueChange={(itemValue) => {
                            setSelectedCity(itemValue);
                            setIsCityModalVisible(false);
                        }}
                    >
                        <Picker.Item label="Selecciona una ciudad" value={null} />
                        {cities[selectedDepartment]?.map((city, index) => (
                            <Picker.Item key={index} label={city} value={city} />
                        ))}
                    </Picker>
                </View>
            </Modal>

            <Button 
                title="REGISTER"
                onPress={handleRegister}
            />
        </View>
    );
};

export default UserRegistration;