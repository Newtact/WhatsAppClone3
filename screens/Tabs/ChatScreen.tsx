import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ChatRooms from '../../data/ChatRooms';
import ChatListItem from '../ChatListItem';



const ChatScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <FlatList 
            style={{width :'100%'}}
                data={ChatRooms}
                renderItem={({item}) => <ChatListItem chatRoom={item} />}
                keyExtractor={(key) => key.id}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',        
    }
})

export default ChatScreen;