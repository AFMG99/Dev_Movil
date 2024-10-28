import { StyleSheet } from "react-native";
import globalStyles from '../styles/globalStyles'

const paymentBranchStyles = StyleSheet.create({
    ...globalStyles,
    itemContainer: {
        ...globalStyles.itemContainer,
        flexDirection: 'row',
        padding: 10,
        elevation: 3,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    price: {
        ...globalStyles.itemPrice,
        fontWeight: 'bold',
        marginTop: 4,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    quantity: {
        fontSize: 16,
        marginHorizontal: 10,
        minWidth: 30,
        textAlign: 'center',
        color: '#333',
    },
    emojiButton: {
        fontSize: 20,
    },
    footer: {
        marginTop: 16,
        paddingTop: 16,
        padding: 10,
        margin: 5,
    },
    total: {
        ...globalStyles.total,
        marginBottom: 16,
        textAlign: 'center',
    },
    addressInput: {
        borderRadius: 8,
        marginVertical: 8,
        fontSize: 14,
        padding: 4,
        width: '100%',
    },
    accordion: {
        width: '100%',
        marginVertical: 4,
        backgroundColor: 'white',
        borderRadius: 10,
    },
});

export default paymentBranchStyles;