import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    HomeScreen: undefined,
    EditNoteScreen: undefined
}

export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;