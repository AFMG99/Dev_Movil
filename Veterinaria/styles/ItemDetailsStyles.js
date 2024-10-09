import { StyleSheet } from "react-native";
import globalStyles from './globalStyles'

const ItemDetailsStyles = StyleSheet.create({
    ...globalStyles,
    container: {
        flexGrow: 1,
        ...globalStyles.container,
    },
    emoji: {
        ...globalStyles.emoji,
        fontSize: 30,
    },
    cartIcon: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1,
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
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    title: {
        ...globalStyles.title,
        fontSize: 22,
        color: '#4A148C',
        marginBottom: 8,
    },
    description: {
        ...globalStyles.itemDetails,
        fontSize: 16,
        marginBottom: 8,
    },
    value: {
        ...globalStyles.itemPrice,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    characteristicsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a1b9a',
        marginTop: 16,
        marginBottom: 8,
    },
    characteristics: {
        fontSize: 14,
        color: '#555',
        marginBottom: 16,
    },
    paymentMethodsContainer: {
        alignItems: 'center',
        marginVertical: 16,
    },
    paymentMethodsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a1b9a',
        marginBottom: 8,
    },
    paymentIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    ratingTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6a1b9a',
        marginVertical: 16,
    },
    starsContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
});

export default ItemDetailsStyles;