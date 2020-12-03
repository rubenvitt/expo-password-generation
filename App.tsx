import React from 'react';
import {Button, ThemeProvider} from "react-native-elements";
import {StyleSheet, View, ViewStyle} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {
    return (
        <ThemeProvider>
            <View style={styles.container}>
                <Button type="clear" icon={<Icon size={36} name={'arrow-right'} color={"white"} />}/>
            </View>
        </ThemeProvider>
    );
};

interface Styles {
    container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'green',
    }
});
