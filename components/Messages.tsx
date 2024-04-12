// import { Firestore } from '@/app/firebase/connection';
// import { Chat, chatConverter, chatInitialState } from '@/app/Types/ChatTypes';
import Colors from '@/constants/Colors';
import { Link, router } from 'expo-router';
// import { collection, onSnapshot, query } from 'firebase/firestore';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface MessageProps {
  // chat: Chat;
  title: string;
  lastMessage: string;
  createdAt: Date;
}

const Message: React.FC<MessageProps> = ({ title, lastMessage, createdAt }) => {

  const randomImage = 'https://cdn-icons-png.flaticon.com/512/2919/2919906.png'; // Replace with your own random image URL


  return (
    // <TouchableOpacity onPress={() => router.navigate({ pathname: '/chat', params: { chat: { ...chatInitialState, title: chat.title } } })}>
    <TouchableOpacity >
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', padding: 10 }}>
        <Image source={{ uri: randomImage }} style={{ width: 50, height: 50, borderRadius: 25 }} />
        <View style={{ marginLeft: 10, width: '100%' }}>
          <Text style={{ fontWeight: 'bold', color: Colors.dark.text }}>{title}</Text>
          <Text style={{ color: Colors.dark.text }}>{lastMessage}</Text>
          <Text style={{ color: 'gray' }}>{createdAt.toDateString()}</Text>
        </View>
      </View>
      <View style={{
        height: 1,
        backgroundColor: 'gray',
        width: '80%',
      }} />
    </TouchableOpacity>

  );
};

export default Message;