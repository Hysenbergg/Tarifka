import { Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa500',
        padding: 10
    },
    inner_container: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        top: 0,
        bottom: 0,
        left: 0,
        right:0,
    },
    info_container: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: deviceSize.width - 20,
        padding: 5,
        alignItems: 'flex-end',
    },
    image: {
        height: deviceSize.height / 4,
        width: deviceSize.width - 20,
        resizeMode: 'contain',
        flex: 1,
    },
    title: {
        fontSize: 25,
        color: 'white',
    },
})