import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Message from '@/components/Messages';
import { FlatList } from 'react-native';
import { Firestore } from '../firebase/connection';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';

const messages = [
  { id: '1', title: 'Message 1', lastMessage: 'Last message 1', createdAt: new Date() },
  { id: '2', title: 'Message 2', lastMessage: 'Last message 2', createdAt: new Date() },
  { id: '3', title: 'Message 3', lastMessage: 'Last message 3', createdAt: new Date() },
  // Add more messages as needed
];


export default function TabOneScreen() {

  useEffect(() => {
    const getMessages = async () => {
      const docRef = doc(Firestore, 'messages', '1');
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
    }
    getMessages();
  }
    , []);

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Message title={item.title} lastMessage={item.lastMessage} createdAt={item.createdAt} />
        )}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
