import { StyleSheet } from "react-native";

const ItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F3F1F5',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4A148C',
        marginVertical: 12,
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    textMuted: {
        fontSize: 14,
        color: '#757575',
    },
    image: {
        borderRadius: 8,
        backgroundColor: '#EDE7F6',
    },
    buttonPrimary: {
        backgroundColor: '#6200ee',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    inputField: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 8,
        fontSize: 14,
        padding: 4,
        width: '100%',
    },
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4A148C',
        marginBottom: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    quantityText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
        color: '#4A148C',
    },
    deleteButton: {
        alignSelf: 'flex-end',
        marginTop: 5,
    },
});

export default ItemStyles;