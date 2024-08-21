import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F5F5DC',
        borderRadius: 10,
        padding: 20,
        margin: 10,     
    },
    title: {
        fontSize: 90,
        color: '#000',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 15,
    },
    textInput: {
        width: '75%',
        padding: 10,
        paddingStart: 30,
        margin: 20,
        height: 40,
        marginTop: 20,
        borderTopEndRadius: 20,
        backgroundColor: '#fff',
        color: 'gray'
    },
    foto: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10
    },
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    login:{
        flex: 1,
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default styles;
