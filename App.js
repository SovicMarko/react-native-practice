// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

// import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
import ToDoScreen from './app/screens/ToDoScreen';



export default function App() {
  console.log("App test");



  return (
    <ToDoScreen />
    // <WelcomeScreen />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     // justifyContent: 'center',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//   },
//   buttons: {
//     display: "flex",
//     flexDirection: "row",

//   }
// });
