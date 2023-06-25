import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [text, setText] = useState<string>('')

  const saveNote = async () => {
    await AsyncStorage.setItem('note', text)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        multiline={true}
        style={styles.textInput}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button title='Save note' onPress={() => { saveNote() }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#ffb70342',
    width: '100%',
    height: 200,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20
  }
});
