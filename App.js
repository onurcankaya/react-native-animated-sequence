import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, Text } from 'react-native'

export default class AnimatedSequence extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Box</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "#333",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: '#ddd'
  }
})

AppRegistry.registerComponent('AnimatedSequence', () => AnimatedSequence);
