import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Ionicons } from '@expo/vector-icons';
import { add } from 'react-native-reanimated';
const datas = [
	{
		userName: "arum-k",
		review: "여기 완전 맛집이에요!",
		rating: 4,
		date: "2021.02.22"
	},
	{
		userName: "dipsiiiiiiiiii",
		review: "너무 맛있어서 주말 내내 시켜 먹었어요",
		rating: 5,
		date: "2021.03.22"
	},
	{
		userName: "sangmotmi",
		review: "저는 별로였는데 같이 간 친구는 좋아하더라구요",
		rating: 3.5,
		date: "2021.03.22"
	},
]

const reply = datas.map((x) => {
  return(
      <View>
        <Text>{x.userName}</Text>
        <Rating ratingCount={5} startingValue={x.rating} />
        <Text>{x.date}</Text>
        <Text>{x.review}</Text>
      
      </View>
      
  );
});


function Main() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState(datas);
  const onChangeText = (text) =>{
    //변경된 값을 저장
    setInputValue(text);
  };

    return (  


<View>
      <TextInput style={{width:200,height:25,borderWidth:1}}/>
      <TouchableOpacity 
      onPress={() => {console.log('asdf')}}>
      </TouchableOpacity>
	  {reply}
</View>
    );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 56,
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
  },
  title: {
      color: '#212121',
      fontSize: 32,
      fontWeight: '600',
  },
  button: {
      width: 28,
      height: 28,
      borderRadius: 14,
      backgroundColor: '#212121',
      justifyContent: 'center',
      alignItems: 'center'
  }
})

export default Main;