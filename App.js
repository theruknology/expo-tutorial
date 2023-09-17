import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Type yo lame goals here" />
        <Button style={styles.addButton} title="Add Goalz" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    padding: 5,
    borderRadius: 10,
  },
  addButton: {
    borderRadius: 20,
    backgroundColor: "red",
  },
});
