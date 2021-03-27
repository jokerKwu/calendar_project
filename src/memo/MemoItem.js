import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function MemoItem() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => setWriteMode(true)}
        >
          <Ionicons name="add-circle-outline" color="#FFF" size={24} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={memos}
          renderItem={renderMemo}
          style={styles.listContainer}
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
  button: {
    width: 28,
    height: 28,
    borderRadius: 14,
    padding: 15,
    marginRight: 10,
    backgroundColor: "#F0D629",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    right: 20,
    bottom: 20,
    zIndex: 10,
  },
  listContainer: {
    flex: 1,
  },
});
