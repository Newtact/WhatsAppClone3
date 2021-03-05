import * as React from 'react';
import { View, Text,Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import {useNavigation} from '@react-navigation/native';


import moment from 'moment';

export type ChatListItemProps = {
    chatRoom : ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {

    const {chatRoom} = props;
    const user = chatRoom.users[1];
    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('ChatRoom', {id: chatRoom.id, name: user.name});
    }

    return (
        <TouchableWithoutFeedback 
        onPress= {onClick}
        >

        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text style={styles.message}>{chatRoom.lastMessage.content}</Text>
                </View>                
            </View>
            <View>
                <Text style={styles.timestamp}>{moment(chatRoom.lastMessage.createdAt).format("DD MMM YY")}</Text>
                {/* <Text style={styles.timestamp}>Yesterday</Text> */}
            </View>
        </View>

        </TouchableWithoutFeedback>
    );
}

export default ChatListItem;
