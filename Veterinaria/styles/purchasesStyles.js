import { StyleSheet } from "react-native";

const purchasesStyles = StyleSheet.create({
    listContent: {
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
        backgroundColor: '#EDE7F6',
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4A148C',
        marginBottom: 4,
    },
    itemDescription: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 8,
    },
    itemStatus: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#6A1B9A',
    },
});

export default purchasesStyles;