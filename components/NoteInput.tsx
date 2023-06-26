import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

type Props = {
    saveNote: (text: string) => void
}

const NoteInput = ({ saveNote }: Props) => {

    const [text, setText] = useState<string>('')

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