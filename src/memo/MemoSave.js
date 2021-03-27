import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function MemoSave() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setWriteMode(false)}
        >
          <Text style={styles.text}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => addMemo()}>
          <Text style={styles.text}>저장</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleTextInput}
          placeholder="제목을 입력해주세요."
          onChangeText={(text) => setTitle(text)}
          multiline={true}
        />
        <TextInput
          style={styles.contentTextInput}
          placeholder="내용을 입력해주세요."
          onChangeText={(text) => setContent(text)}
          multiline={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E1E1",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 15,
  },
  text: {
    fontSize: 18,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentTextInput: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#DBE3ED",
  },
  memoItem: {
    padding: 10,
    height: 60,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
