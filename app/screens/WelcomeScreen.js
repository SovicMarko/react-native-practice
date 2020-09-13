import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

const WelcomeScreen = (params) => {
    return (

        <ImageBackground style={styles.background}
            source={{ uri: "https://www.isango.com/theguidebook/wp-content/uploads/2017/04/twilight.jpg" }}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/favicon.png")} />
                <Text>Ready to survive yet?</Text>
            </View>
            <View style={styles.loginButton}>
                <Text style={styles.buttonText}>Log in</Text>
            </View>
            <View style={styles.registerButton}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </View>
        </ImageBackground >

    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
    },
    loginButton: {
        width: '100%',
        height: 70,
        fontSize: 30,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center"
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 22
    }
})
export default WelcomeScreen;
