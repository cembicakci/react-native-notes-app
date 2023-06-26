import React from 'react'
import { StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'

import NoteInput from '../components/NoteInput'
import { saveNote } from '../services/NoteStoreService'
import { EditScreenRouteProp } from '../types'

const EditNoteScreen = () => {

    const route = useRoute<EditScreenRouteProp>()
    const noteId = route?.params?.noteId

    console.log(route)

    return (
        <NoteInput saveNote={saveNote} noteId={noteId} />
    )
}

export default EditNoteScreen

const styles = StyleSheet.create({})