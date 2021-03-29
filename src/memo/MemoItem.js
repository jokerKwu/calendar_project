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
import Swipeable from "react-native-gesture-handler/Swipeable";
import DeleteButton from "../wishList/DeleteButton";

const MemoItem = (props,remove) =>{
    return(
        <Swipeable renderRightActions={() => <DeleteButton onPress={remove} />}>
        <View style={styles.memoItem}>
          <Text
            style={{
              marginRight: 10,
            }}
          >
            {item.id}
          </Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("MemoContent", {
                title: item.title,
                content: item.content,
              });
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        </View>
      </Swipeable>
    );
};