import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa500',
    },
    body_container: {
        padding: 10,
        margin: 10,
        backgroundColor: '#eceff1',
        flexDirection: 'row',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    image: {
        width: 70,
        minHeight: 50,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    categoryName: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlignVertical: 'center',
    },
})