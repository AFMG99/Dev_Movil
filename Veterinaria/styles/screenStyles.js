import { StyleSheet } from "react-native";
import globalStyles from './globalStyles'

const screenStyles = StyleSheet.create({
    ...globalStyles,
    headerWave: {
        ...globalStyles.headerWave,
        height: 60,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
});

export default screenStyles;