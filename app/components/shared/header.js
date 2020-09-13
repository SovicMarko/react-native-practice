import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontWeight: "bold"
    }
})

export default Header;