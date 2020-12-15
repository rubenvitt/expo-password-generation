import React, {useState} from "react";
import {StyleSheet, TextInput, View, ViewStyle} from "react-native";
import {Button, FullTheme, Icon, Slider, Text, withTheme} from "react-native-elements";
import {useDarkMode} from "../../hooks/dark-mode.hooks";
import Clipboard from 'expo-clipboard';
import {usePasswordGenerator} from "../../functions/password-generation.function";

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

    const [sliderValue, setSliderValue] = useState(1);

    const {generatePassword, password} = usePasswordGenerator();

    return <>
        <View style={{...containerStyle.container, backgroundColor: isDark ? '#333' : '#ccc'}}>
            <TextInput style={containerStyle.textInput} editable={false} value={password} />

            <Slider
                style={{marginRight: 20, marginLeft: 20}}
                value={sliderValue}
                onValueChange={(val) => setSliderValue(val)}
                maximumValue={100}
                minimumValue={1}
                step={1}
                trackStyle={{ height: 10, backgroundColor: 'transparent' }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                thumbProps={{
                    children: (
                        <View>
                            <Icon
                                name="user-secret"
                                type="font-awesome"
                                size={20}
                                reverse
                                containerStyle={{ bottom: 20, right: 20 }}
                                color="#f50"
                            />
                        </View>
                    ),
                }}
            />

            <View style={containerStyle.buttonContainer}>
                <Button type="solid" style={containerStyle.button} onPress={() => {
                    console.log('ABC');
                    Clipboard.setString(password);
                }} icon={<Icon type={'octicon'} name={'chevron-right'} />} />
                <Button style={containerStyle.button} type={'solid'} title={'Reload'} onPress={() => {
                    generatePassword({length: sliderValue});
                }} />
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