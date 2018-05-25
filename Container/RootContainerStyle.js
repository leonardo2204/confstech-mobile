import {
    StyleSheet,
    Platform,
    StatusBar
} from "react-native";

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 0;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    appBar: {
        backgroundColor: '#FFCA04',
        height: APPBAR_HEIGHT,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
});