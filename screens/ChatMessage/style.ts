import { StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {        
        width: '100%',        
        padding: 10,
        
    },
    messageBox: {
        marginRight: 50,
        backgroundColor: '#e5e5e5',
        padding: 10,
        borderRadius: 5
    },

    name: {
        color: Colors.light.tint,
        fontWeight: 'bold'
    },

    message: {
        
    },

    time: {
        alignSelf: 'flex-end',
        color: 'grey'
    }

});

export default styles;