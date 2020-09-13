import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

const AddButton = (props) => {
    const [activeInput, setActiveInput] = useState(false);



    return (
        <View style={styles.addButton} >
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
            // onPress={this.ButtonClickCheckFunction}
            >
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    )

}


const styles = StyleSheet.create({

    SubmitButtonStyle: {
        width: 70,
        height: 70,
        backgroundColor: '#00BCD4',
        borderRadius: 45,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: "center",
        alignItems: 'center',
    },
    addButton: {
        position: "absolute",
        bottom: 40,
        right: 30,
    },
    plus: {
        fontSize: 60,
        marginTop: -5,
        color: "white"
    }

})

export default AddButton;