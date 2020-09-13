import React from "react";
import { Image, StyleSheet, View } from "react-native";


import colors from '../config/colors.js'

function ViewImageScreen(props) {
    let testImage = "https://ae01.alicdn.com/kf/H52d432c0c80f4b139724cd4b961d3afdU/Outdoor-knife-camping-hunting-self-defense-short-knife-straight-knife-survival-knife-high-hardness-military-knife.jpg";

    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: testImage }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30
    },
    container: {
        backgroundColor: colors.background
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
export default ViewImageScreen;