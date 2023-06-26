import React from 'react'
import { useRoute } from '@react-navigation/native'

import NoteInput from '../components/NoteInput'
import { EditScreenRouteProp } from '../types'

const EditNoteScreen = () => {

    const route = useRoute<EditScreenRouteProp>()
    const noteId = route?.params?.noteId

    return (
        <NoteInput noteId={noteId} />
    )
}

export default EditNoteScreen
