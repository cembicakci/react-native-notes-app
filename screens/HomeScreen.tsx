import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import EditNoteScreen from './EditNoteScreen'

import { ScreenNavigationProp } from '../types';

type Props = {
    toggleNewNote: (toggle: boolean) => void
}

const HomeScreen = () => {
    const navigation = useNavigation<ScreenNavigationProp>();

    return (
        <>
            <Text>Home Screen</Text>
            <Button title='New Note' onPress={() => { navigation.navigate('EditNoteScreen') }} />
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})