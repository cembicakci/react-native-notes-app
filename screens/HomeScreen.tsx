import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { ScreenNavigationProp } from '../types';
import SavedNotesList from '../components/SavedNotesList';

const HomeScreen = () => {
    const navigation = useNavigation<ScreenNavigationProp>();
    return (
        <>
            <SavedNotesList />
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})