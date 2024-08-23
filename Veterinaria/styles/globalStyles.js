import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3e5f5',
    },
    headerWave: {
        height: 100,
        backgroundColor: '#6a1b9a',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#6a1b9a',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#7e57c2',
        textAlign: 'center',
        marginBottom: 20,
    },
    textInput: {
        marginBottom: 10,
        backgroundColor: 'white',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#6a1b9a',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginVertical: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerWave: {
        height: 100,
        backgroundColor: '#6a1b9a',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
});

export default styles;
