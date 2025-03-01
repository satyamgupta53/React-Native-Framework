import React, { JSX } from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native";

function AppNew(): JSX.Element{ // JSX.Element is a type that represents a React element
    const isDarkMode = useColorScheme() === "dark";
    return (
        <View style={styles.container}>
            <Text>New App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default AppNew;