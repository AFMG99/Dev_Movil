import { StyleSheet } from "react-native";

const PQRStyles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    container: {
        padding: 20,
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,
    },
    label: {
        fontSize: 18,
        color: '#673AB7',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    accordion: {
        backgroundColor: '#EDE7F6',
        borderRadius: 8,
        marginBottom: 16,
    },
    accordionTitle: {
        color: '#512DA8',
    },
    listItem: {
        color: '#512DA8',
    },
    textInput: {
        height: 120,
        borderColor: '#9575CD',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 16,
        backgroundColor: '#EDE7F6'
    },
    submitButton: {
        backgroundColor: '#6a1b9a',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 16,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    snackbar: {
        backgroundColor: '#7E57C2',
    },
});

export default PQRStyles;