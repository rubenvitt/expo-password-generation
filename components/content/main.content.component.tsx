import React from "react";
import {StyleSheet, TextInput, View, ViewStyle} from "react-native";
import {Button, FullTheme, Icon, withTheme} from "react-native-elements";
import {useDarkMode} from "../../hooks/dark-mode.hooks";
import Clipboard from 'expo-clipboard';

const Content: React.FC<{ theme: FullTheme }> = ({theme}) => {

    const {isDark} = useDarkMode();
    const containerStyle = StyleSheet.create<Styles>({
        ...styles,
        textInput: {
            ...styles.textInput,
            backgroundColor: isDark ? 'rgba(33, 33, 33, 0.3)' : 'rgba(217,217,217, 0.4)',
            color: isDark ? '#eee' : '#333',
            padding: 10
        },
        button: {
            ...styles.button,
        }
    });

    const value = 'ABCDEV'

    return <>
        <View style={{...containerStyle.container, backgroundColor: isDark ? '#333' : '#ccc'}}>
            <TextInput style={containerStyle.textInput} editable={false} value={value} />
            <View style={containerStyle.buttonContainer}>
                <Button type="solid" style={containerStyle.button} onPress={() => {
                    console.log('ABC');
                    Clipboard.setString(value);
                }} icon={<Icon type={'octicon'} name={'chevron-right'} />} />
                <Button style={containerStyle.button} type={'solid'} title={'Reload'} />
            </View>
        </View>
    </>
}

export const MainContent = withTheme(Content);

interface Styles {
    buttonContainer: ViewStyle;
    container: ViewStyle;
    button: ViewStyle;
    textInput: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    buttonContainer: {
        justifyContent: 'space-evenly',
        flexDirection: "row"
    },
    button: {
        width: 100,
        fontSize: 36,
        paddingTop: 30,
        paddingBottom: 30,
    },
    textInput: {

    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'green',
        height: '100%'
    },
});