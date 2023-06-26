import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { ScreenNavigationProp } from '../types';
import { getNote } from '../services/NoteStoreService';

const HomeScreen = () => {
    const navigation = useNavigation<ScreenNavigationProp>();

    const [data, setData] = useState<string>('')

    useFocusEffect(() => {
        getNote().then((response) => { setData(response ?? '') })
    })

    return (
        <>
            <View>
                <Text>{data}</Text>
            </View>

            <Button title='New Note' onPress={() => { navigation.navigate('EditNoteScreen') }} />
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})