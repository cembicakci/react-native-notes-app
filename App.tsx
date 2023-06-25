import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteInput from './components/NoteInput';
import Home from './components/Home';

export default function App() {

  const [isCreate, setIsCreate] = useState<boolean>(false)

  const saveNote = async (text: string) => {
    setIsCreate(false)
    await AsyncStorage.setItem('note', text)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        isCreate ? (<NoteInput saveNote={saveNote} />) : (<Home toggleNewNote={(toggle) => { setIsCreate(toggle) }} />)
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
