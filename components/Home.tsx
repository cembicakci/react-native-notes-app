import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

type Props = {
    toggleNewNote: (toggle: boolean) => void
}

const Home = ({ toggleNewNote }: Props) => {
    return (
        <>
            <Text>Home Screen</Text>
            <Button title='New Note' onPress={() => { toggleNewNote(true) }} />
        </>
    )
}

export default Home

const styles = StyleSheet.create({})