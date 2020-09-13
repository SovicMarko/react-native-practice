import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import Header from '../components/shared/header';
import ToDo from '../components/ToDo/component';
import AddButton from '../components/shared/addButton';

const ToDoScreen = () => {
    const [todos, setTodos] = useState([
        { text: "buy coffee", key: '1' },
        { text: "create an app", key: '2' },
        { text: "play Dark Souls", key: '3' }
    ]);

    return (
        <View style={styles.container}>
            <Header title={'My Todos'} />
            <View style={styles.content}>
                <View>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <ToDo text={item.text} />
                        )} />
                </View>
            </View>
            <AddButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        // backgroundColor: "black"
    },

})

export default ToDoScreen