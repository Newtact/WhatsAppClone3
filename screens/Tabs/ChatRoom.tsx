import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ChatRoom = () => {
    const route = useRoute();
return (
        <View>
            <Text>Chat Room</Text>
            <Text>{route.params.id} </Text>
            <Text>{route.params.name} </Text>
        </View>
    );
}

const styles = StyleSheet.create({


})

export default ChatRoom;