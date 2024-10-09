import { StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles"

const shoppingCartStyles = StyleSheet.create({
    ...globalStyles,
    itemDescription: {
        ...globalStyles.itemDescription,
        marginVertical: 4,
    },
    total: {
        ...globalStyles.total,
        marginBottom: 10,
    },
    itemContainer: {
        flex: 1,
        ...globalStyles.itemContainer,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        padding: 10,
        flexDirection: 'row',
        elevation: 3,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    quantityButton: {
        backgroundColor: '#EDE7F6',
        padding: 10,
        borderRadius: 5,
    },
    quantityText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
        color: '#4A148C',
    },
    deleteButton: {
        alignSelf: 'flex-end',
        marginTop: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#EDE7F6',
    },
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        alignItems: 'center',
    },
});

export default shoppingCartStyles;