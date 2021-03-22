import React from 'react';
import { StyleSheet, FlatList, SafeAreaView,View, AsyncStorage } from 'react-native';
import WishHeader from './WishHeader';
import WishItem from './WishItem';
import TaskModal from './TaskModal';

export default class WishMain extends React.Component {
  state = {
    wish: [
    {
      title: "WishList 01",
      done: true,
    },
    {
      title: "WishList 02",
      done: false,
    },
    ],
    showModal:false,
  }

  render() {
    return (
      <View style={styles.container}>
        <WishHeader 
        show={() => {
          this.setState({showModal:true})
        }}
        />
<FlatList 
          data={this.state.wish}
          renderItem={({ item, index }) => {
            return (
              <WishItem
                title={item.title}
                done={item.done}
                keyExtractor={(id, index) => {
                  return id + '${index}'
                }}
                remove={() => {
                  this.setState({
                    wish: this.state.wish.filter((_, i) => i !== index)
                  }, this.save)
                }}
                toggle={() => {
                  const newWish = [...this.state.wish]
                  newWish[index].done = !newWish[index].done
                  this.setState({ wish: newWish}, this.save)
                }}
              />
            )
          }}
/>
<TaskModal 
          isVisible={this.state.showModal} 
          add={(title) => {
            this.setState({
              wish: this.state.wish.concat({
                title: title,
                done: false,
              }),
              showModal: false,
            }, this.save)
          }}
          hide={() => {
            this.setState({ showModal : false })
          }}
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
});