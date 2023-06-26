import React, { useCallback, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { ScreenNavigationProp } from '../types';
import { Note, getAllNotes, getNote } from '../services/NoteStoreService';

const HomeScreen = () => {
    const navigation = useNavigation<ScreenNavigationProp>();

    const [data, setData] = useState<Note[]>([])

    useFocusEffect(
        useCallback(() => {
            getAllNotes().then(result => setData(result.notes))
            // getNote().then((response) => { setData(response ?? '') })
        }, [])
    )
    console.log(data)

    return (
        <>
            <View>
                {
                    data.map((note) => (
                        <Text key={note.id}>{note.text}</Text>
                    ))
                }
            </View>

            <Button title='New Note' onPress={() => { navigation.navigate('EditNoteScreen') }} />
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})