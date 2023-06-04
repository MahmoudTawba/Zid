import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    ListItemContainer: {
        paddingTop: 10,
        paddingBottom: 12,
        borderBottomColor: 'rgba(0,0, 0, 0.05)',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    flex: {
        flex: 1,
    },
    image: {
        marginTop: 8,
        marginRight: 16,
    },
    discounted: {
        textDecorationLine: 'line-through',
        color: "#000000"
    },
    sale: {
        color: '#DA2121',
    },
});
export default styles  