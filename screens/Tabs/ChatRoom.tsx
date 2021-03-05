import * as React from 'react';
import { View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Chats from '../../data/Chats';
import ChatMessage from '../ChatMessage';
import {BG} from '../../assets/BG.png'

const ChatRoom = () => {
    const route = useRoute();
return (
        <View>
            <ImageBackground
            source={BG}
            style={{width: '100%', height: '100%'}}
            >
           <FlatList 
            data={Chats.messages}
            renderItem={({item}) => <ChatMessage message={item} />}
            keyExtractor={(key) => key.id}
            inverted
           />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({


})

export default ChatRoom;