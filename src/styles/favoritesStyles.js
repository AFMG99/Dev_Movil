import { StyleSheet } from "react-native";

const favoritesStyles = StyleSheet.create({
    container: {
        padding: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginRight: 15,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    estado: {
        alignSelf: 'flex-start',
    },
});

export default favoritesStyles;