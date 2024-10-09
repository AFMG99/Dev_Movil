import { StyleSheet } from "react-native";

const itemCategoriesStyles = StyleSheet.create({
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4A148C',
        marginVertical: 12,
        marginLeft: 15
    },
    categoryList: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingRight: 15,
        backgroundColor: '#f7e5f9'
    },
    categoryItem: {
        alignItems: 'center',
        margin: 10,
        height: 180,
    },
    categoryImage: {
        width: 100,
        height: 90,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: '#E1BEE7',
    },
    categoryName: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: '#4A148C',
        width: 100,
        backgroundColor: 'white', 
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        elevation: 2,
    },
    itemImage: {
        width: 140,
        height: 140,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#EDE7F6',
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A148C',
        textAlign: 'center',
    },
    itemDescription: {
        fontSize: 12,
        color: '#757575',
        textAlign: 'center',
        marginVertical: 4,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#7B1FA2',
        textAlign: 'center',
    },
});

export default itemCategoriesStyles;