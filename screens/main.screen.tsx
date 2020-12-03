import React from "react";
import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useDarkMode} from "../hooks/dark-mode.hooks";
import {PageTitle} from "../components/text.component";
import {MainContent} from "../components/content/main.content.component";

export const MainScreen = () => {
    const {isDark} = useDarkMode();

    return <View>
        <View>
            <PageTitle>Test-Titel</PageTitle>
        </View>
        <View>
            <MainContent />
        </View>
        <View>

        </View>
        <StatusBar style={isDark ? 'dark' : 'light'}/>
    </View>
};