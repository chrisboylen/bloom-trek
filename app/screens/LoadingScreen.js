import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/splash.png')} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5ED',
  },
})

