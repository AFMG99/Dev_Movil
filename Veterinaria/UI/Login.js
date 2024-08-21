import React from "react";
import { Button, StatusBar, Text, View, TouchableOpacity } from "react-native";
import { TextInput, Provider as PaperProvider } from 'react-native-paper';
import styles from "../styles/globalStyles";

const Login = ({ navigation }) => {
    const [text, setText] = React.useState('');
    return (
        <View style={styles.login}>
            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subtitle}>Ingresa en tu cuenta</Text>
            <TextInput 
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                placeholder="hello@email.com"
                style={styles.textInput}
            />

            <TextInput
              label="Password"
              secureTextEntry
              //right={<TextInput.Icon icon="eye" />}
              style={styles.textInput}
            />

            <Text style={styles.subtitle}>Don't have account?</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('UserRegistration')}
                style={{ alignSelf: 'flex-end', marginVertical: 8 }}>
                <Text style={{ color: 'purple' }}>Forgot Password?</Text>
            </TouchableOpacity>


            <StatusBar style="auto" />
            <Button 
                title="LOGIN" 
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default Login;
