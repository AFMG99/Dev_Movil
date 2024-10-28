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
    itemContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        elevation: 5,
        margin: 15,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        backgroundColor: '#EDE7F6',
    },
    itemDetails: {
        flex: 1,
        marginLeft: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A148C',
    },
    itemDescription: {
        fontSize: 14,
        color: '#757575',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#7B1FA2',
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4A148C',
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
    input: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginVertical: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    emoji: {
        fontSize: 18,
    },
    footerWave: {
        height: 100,
        backgroundColor: '#6a1b9a',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    login: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    registerText: {
        color: '#6a1b9a',
        textDecorationLine: 'underline',
    },
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

export default styles;
