import React, { Component } from 'react';
import { View, Image, Animated, Easing, StyleSheet } from 'react-native';

export default class LoadingScreen extends Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.spin()
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render () {
    const spin = this.spinValue.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image 
          style={{
            width: 200,
            height: 200,
            transform: [{rotate: spin}]
          }}
          source={require('../../assets/images/loading.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f5ed',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

