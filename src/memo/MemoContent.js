import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function MemoContent({route}) {
    const {title, content} = route.params;
    return (
        <View>
            <View style={styles.title}>
                <Text>제목 :
                </Text>
                <Text>{JSON.stringify(title)}</Text>
            </View>
            <View>
                <Text>내용 :
                </Text>
                <Text>{JSON.stringify(content)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        flexDirection: 'row'
    }
});