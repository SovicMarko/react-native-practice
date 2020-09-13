// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  // TouchableWithoutFeedback,
  TouchableHighlight,
  // TouchableOpacity,
  View,
  Alert,
  Button,
  StatusBar,
  Image,
  Platform,
} from 'react-native';

export default function App() {
  console.log("App test");



  return (
    <View style={styles.container}>
      <Text>Survival app</Text>
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300'
          }} />
      </TouchableHighlight >
      <StatusBar style="auto" />
      <View style={styles.buttons}>
        <Button title="Alert"
          onPress={() => {
            Alert.alert("My title", "My message", [
              { text: "Yes", onPress: () => console.log("Yes") },
              { text: "No", onPress: () => console.log("No") }
            ])
          }} />
        <Button title="Prompt"
          onPress={() =>
            Alert.prompt("My title", "My message", (text) => console.log(text))
          } />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  buttons: {
    display: "flex",
    flexDirection: "row",

  }
});
