import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, 
          TouchableOpacity, View, FlatList, Alert } from 'react-native';
export default function Memo() {
  const [writeMode, setWriteMode] = useState(false); 
  const [txt, setTxt] = useState(''); 
  const orimemo = [
    { 
      id:'1',
      memo:'안녕하세요.'
    },
    {
      id:'2',
      memo:'테스트입니다.'
    },
    {
      id:'3',
      memo:"심심하네요..."
    }
  ];
  const [memos, setMemos] = useState(orimemo); 
  const [idx, setIdx] = useState(4); 
  const addMemo = () =>{
    let a = {id:idx, memo:txt};
    setMemos(prev=>[...prev,a]);  
    setWriteMode(false); 
    setIdx(prev=>prev+1); 
  }
  const renderMemo = ({item}) =>{
    return(
      <View style={{padding:10, borderBottomColor:'#ddd', borderBottomWidth:1,  flexDirection:'row'}}>
        <Text style={{marginRight:10, }}>{item.id}</Text>
        <Text>{item.memo}</Text>
      </View>
    );
  }
  if(writeMode){
    return (
      <SafeAreaView style={{flex:1, backgroundColor:'#D9CC8B', }}>

      <View  style={{flex:1,   }}>        
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity style={{padding:15, }} onPress={()=>setWriteMode(false)}>
            <Text style={{fontSize:18, }} >취소</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding:15, }}     onPress={()=>addMemo()} >
            <Text style={{fontSize:18, }}>저장</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, backgroundColor:'#fff', }}>
        <TextInput
            style={{  backgroundColor: '#eee',flex:1, padding:10,  }}
            onChangeText={text => setTxt(text)}
            multiline 
          />
        </View>
        <StatusBar style="auto" />
      </View>
      </SafeAreaView>
    );
  }




  return (

    <SafeAreaView style={{flex:1, backgroundColor:'#A3CCF0', }}>
      <View style={{}}>
        <Text style={{fontSize:18, padding:15 }}>메모장</Text>
      </View>
      <View style={{flex:1, backgroundColor:'#fff', }}>

        <View style={{position:'absolute', right:20, bottom:20,zIndex:10,  }}>
          <View style={{          width:50, height:50, backgroundColor:'#D9B589', borderRadius:25,
                alignItems:'center', justifyContent:'center', 
            }}>          
            <TouchableOpacity onPress={()=>setWriteMode(true)}>       
              <Text style={{color:'#ffff', }}>글쓰기</Text>
            </TouchableOpacity>
          </View>
        </View>
      <View style={{flex:1, }}>
        <FlatList data={memos}  renderItem={renderMemo}   style={{flex:1}} />
      </View>
      </View>
      <StatusBar style="auto" />
      </SafeAreaView> 

  );
}
 