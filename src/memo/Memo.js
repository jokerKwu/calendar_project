import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    FlatList,
    Alert
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Memo(props) {
    const [writeMode, setWriteMode] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const orimemo = [
        {
            id: '1',
            title: '안녕하세요.',
            content:"블라블라~~~~~~",
        }, {
            id: '2',
            title: '테스트입니다.',
            content:"블라블라~~~~~~2",
        }, {
            id: '3',
            title: "심심하네요...",
            content:"블라블라~~~~~~3",
        }
    ];
    const [memos,setMemos] = useState(orimemo);

    const [idx, setIdx] = useState(4);
    const addMemo = () => {
        let a = {
            id: idx,
            title: title,
            content: content,
        };
        console.log(a.title);
        console.log(a.memo)
        setMemos(prev => [
            ...prev,
            a
        ]);
        setWriteMode(false);
        setIdx(prev => prev + 1);
    }
    const renderMemo = ({item}) => {

        return (
          <>
            <View
                style={{
                    padding: 10,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    flexDirection: 'row'
                }}>
                <Text style={{
                        marginRight: 10
                    }}>{item.id}</Text>
                <TouchableOpacity onPress={() =>{
                    props.navigation.navigate('MemoContent',{title:item.title, content:item.content});
                }}>
                  <Text>{item.title}</Text>
                </TouchableOpacity>
            </View>
            </>
        );
    }
    if (writeMode) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#E3E1E1'
                }}>
                <View style={{
                        flex: 1
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                        <TouchableOpacity
                            style={{
                                padding: 15
                            }}
                            onPress={() => setWriteMode(false)}>
                            <Text
                                style={{
                                    fontSize: 18
                                }}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: 15
                            }}
                            onPress={() => addMemo()}>
                            <Text
                                style={{
                                    fontSize: 18
                                }}>저장</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: '#fff'
                        }}>
                        <TextInput
                            style={{
                                backgroundColor: '#fff',
                                flex: 1,
                                padding: 10
                            }}
                            onChangeText={text => setTitle(text)}
                            multiline="multiline"/>
                            <TextInput
                            style={{
                                backgroundColor: '#fff',
                                flex: 1,
                                padding: 10
                            }}
                            onChangeText={text => setContent(text)}
                            multiline="multiline"/>
                    </View>
                    <StatusBar style="auto"/>
                </View>
            </View>
        );
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#E3E1E1'
            }}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#fff'
                }}>

                <View
                    style={{
                        position: 'absolute',
                        right: 20,
                        bottom: 20,
                        zIndex: 10
                    }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.button}
                        onPress={() => setWriteMode(true)}>
                        <Ionicons name='ios-add' color='#FFF' size={24}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                        flex: 1
                    }}>
                    <FlatList
                        data={memos}
                        renderItem={renderMemo}
                        style={{
                            flex: 1
                        }}/>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    button: {
        width: 28,
        height: 28,
        borderRadius: 14,
        padding: 15,
        marginRight: 10,
        backgroundColor: '#F0D629',
        justifyContent: 'center',
        alignItems: 'center'
    }
});