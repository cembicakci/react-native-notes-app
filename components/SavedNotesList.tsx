import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import { Note, getAllNotes } from "../services/NoteStoreService";

const SavedNotesList = () => {

    const [data, setData] = useState<Note[]>([])

    useFocusEffect(
        useCallback(() => {
            getAllNotes().then(result => setData(result.notes))
        }, [])
    )
    console.log(data)

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    data.map((note) => (
                        <View style={styles.row} key={note.id}>
                            <Text style={styles.note}>
                                {note.text.length === 0 ? '(Blank Note)' : note.text}
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
export default SavedNotesList

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        alignSelf: 'center',
        height: 90,
        justifyContent: 'center'

    },
    note: {
        paddingVertical: 20,
        width: '100%',
        fontSize: 16
    }
})