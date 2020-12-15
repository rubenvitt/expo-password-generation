import React from 'react';
import {Button, Theme, ThemeProvider, withTheme} from "react-native-elements";
import {StyleSheet, View, ViewStyle} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useColorScheme} from "react-native-appearance";
import {MainContent} from "./components/content/main.content.component";

export default function App() {
    const theme: Theme = {
        colors: {
            primary: 'orange',
        }
    }

    const colorScheme = useColorScheme();

    return (
        <ThemeProvider theme={theme} useDark={colorScheme === 'dark'}>
            <MainContent />
        </ThemeProvider>
    );
};
