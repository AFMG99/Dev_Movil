import { StyleSheet } from "react-native";

const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      content: {
        flex: 1,
      },
      footer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6a1b9a',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 20,
      },
      footerItem: {
        width: 68,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ scale: 1 }],
      },
      footerItemSelected: {
        width: 75,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#9575cd',
        transform: [{ scale: 1.2 }],
        marginTop: -2,
      },
      footerText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
      footerTextSelected: {
        color: '#fff',
        fontWeight: 'bold',
      },
});

export default mainStyles;