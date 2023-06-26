import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import NoteInput from '../components/NoteInput'
import { saveNote } from '../services/NoteStoreService'

const EditNoteScreen = () => {

    return (
        <NoteInput saveNote={saveNote} />
    )
}

export default EditNoteScreen

const styles = StyleSheet.create({})