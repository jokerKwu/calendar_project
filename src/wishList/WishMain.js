import React, {useState} from 'react';
import {StyleSheet, FlatList, SafeAreaView, View, TouchableOpacity} from 'react-native';
import WishHeader from './WishHeader';
import WishItem from './WishItem';
import TaskModal from './TaskModal';
import {Ionicons} from '@expo/vector-icons';

export default function WishMain(){
    const wish = [
        {
            title: "WishList 01",
            done: true
        }, {
            title: "WishList 02",
            done: false
        }
    ];
    const [showModal, setShowModal] = useState(false);
    const [wishList, setWishList] = useState(wish);
    return (
        <View style={styles.container}>
                <WishHeader/>
                <FlatList
                    data={wishList}
                    renderItem={({item, index}) => {
                        return (
                            <WishItem/>
                        )
                    }}/>
                <View
                    style={styles.addButtonContainer}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.button}
                        onPress={() => {
                            setShowModal(true)
                        }}>
                        <Ionicons name='add-circle-outline' color='#FFF' size={24}/>
                    </TouchableOpacity>
                    <TaskModal
                    isVisible={this.state.showModal}
                    add={(title) => {
                        setWishList([...wish],{title:title, done:false})
                    }}
                    hide={() => {
                        setShowModal(false)
                    }}/>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff'
    },
    button: {
        width: 28,
        height: 28,
        borderRadius: 14,
        padding: 15,
        marginRight: 10,
        backgroundColor: '#F0D629',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonContainer:{
        position: 'absolute',
        right: 20,
        bottom: 20,
        zIndex: 10
    }
});