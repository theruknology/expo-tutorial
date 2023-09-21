import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [textEntered, setTextEntered] = useState("");
  const [goalList, setGoalList] = useState([
    { id: "1", name: "Less goo" },
    { id: "2", name: "goo" },
    { id: "3", name: "More goo" },
    { id: "4", name: "GO Go" },
  ]);

  const goalInputHandler = (entered) => {
    setTextEntered(entered);
  };

  const addGoalHandler = () => {
    console.log(textEntered);
    setGoalList((curr) => [...curr, { id: Math.random().toString(), name: textEntered }]);
  };

  const deleteGoalHandler = (givenId) => {
    setGoalList((curr) => {
      const updated = curr.filter((itm) => itm.id !== givenId);
      return updated;
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Type yo lame goals here"
        />
        <Button title="Add Goalz" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itm) => {
            return <View style={styles.goalItem}>
              <Text>{itm.item.name}</Text>
              <Button
                title="Delete"
                onPress={() => {
                  deleteGoalHandler(itm.item.id);
                }}
              />
            </View>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          style={styles.goalScroll}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: "column",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 5,
    borderRadius: 10,
  },
  goalsContainer: {
    flex: 5,
    flexDirection: "column",
  },
  goalScroll: {
    flex: 1,
    flexDirection: "column",
  },
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderColor: "#cccccc",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 8,
  },
});
