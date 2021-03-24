import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight} from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default class Main extends Component {
  
  render() {
    const images = [
      'https://placeimg.com/640/640/nature',
      'https://placeimg.com/640/640/people',
      'https://placeimg.com/640/640/animals',
      'https://placeimg.com/640/640/beer',
    ];

    return (
      <View style={styles.container}>

        <ImageSlider
          loop={false}
          autoPlayWithInterval={5000}
          images={images}
          customSlide={({ index, item, style }) => (
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}

        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  customSlide: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: '80%',
    height: '80%',
  },
});

