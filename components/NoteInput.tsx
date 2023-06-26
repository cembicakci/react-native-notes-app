import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { getNote } from '../services/NoteStoreService'

type Props = {
    saveNote: (text: string) => void,
    noteId: string | undefined
}

const NoteInput = ({ saveNote, noteId }: Props) => {

    const [text, setText] = useState<string>('')

    useEffect(() => {
        if (noteId) {
            getNote(noteId).then(result => setText(result?.text ?? ''))
        }
    }, [])

    return (
        <>
            <TextInput
                multiline={true}
                style={styles.textInput}
                value={text}
                onChangeText={(text) => setText(text)}
                autoFocus={true}
            />
            <Button title='Save note' onPress={() => { saveNote(text) }} />
        </>
    )
}

export default NoteInput

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#ffb70342',
        width: '100%',
        height: 200,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20
    }
})