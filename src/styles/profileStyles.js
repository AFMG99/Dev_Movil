import { StyleSheet } from "react-native";
import globalStyles from '../styles/globalStyles'

const profileStyles = StyleSheet.create({
    ...globalStyles,
    container: {
        ...globalStyles.container,
    },
    button: {
        ...globalStyles.button,
        margin: 90
    },
    avatar: {
        marginBottom: 16,
        margin: 15,
        marginLeft: 150
    },
    input: {
        width: '92%',
        margin: 15,
    },
});

export default profileStyles;