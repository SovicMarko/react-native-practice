import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ToDo = (props) => {
    return (
        <View style={styles.card}>
            <Text>{props.text}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 40,
        paddingTop: 20,
        paddingLeft: 20
    },
    text: {
        justifyContent: "center"
    }
})

export default ToDo