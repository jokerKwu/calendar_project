import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import ImageSlider from "react-native-image-slider";
import MainHeader from "./MainHeader";

const images = [
  require("../../static/img/image01.jpg"),
  require("../../static/img/image02.jpg"),
  require("../../static/img/image03.jpg"),
  require("../../static/img/image04.jpg"),
  require("../../static/img/image05.jpg"),
  require("../../static/img/image06.jpg"),
  require("../../static/img/image07.jpg"),
  require("../../static/img/image08.jpg"),
  require("../../static/img/image09.jpg"),
  require("../../static/img/image10.jpg"),
];

export default function Main() {
  return (
    <View style={styles.container}>
      <MainHeader />
      <ImageSlider
        loop={true}
        autoPlayWithInterval={4000}
        images={images}
        customSlide={({ index, item, style }) => (
          <View key={index} style={[style, styles.customSlide]}>
            <Image
              source={item}
              style={styles.customImage}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  customSlide: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  customImage: {
    width: "80%",
    height: "80%",
  },
});
