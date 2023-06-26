import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NoteInput from '../components/NoteInput'
import AsyncStorage from '@react-native-async-storage/async-storage'

const EditNoteScreen = () => {

    const saveNote = async (text: string) => {
        await AsyncStorage.setItem('note', text)
    }

    return (
        <NoteInput saveNote={saveNote} />
    )
}

export default EditNoteScreen

const styles = StyleSheet.create({})