import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.redBox}></Text>
      <Text style={styles.greenBox}></Text>
      <Text style={styles.purpleBox}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  parentStyle: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    // height: 200,
    ...StyleSheet.absoluteFillObject,
  },
  redBox: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    // flex: 4
  },
  greenBox: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    top: 100
    // alignSelf: 'center',
    // flex: 4
    // ...StyleSheet.absoluteFillObject,
    // top: 0,
    // bottom: 0
    // left: 20
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: 100,
    width: 100
    // flex: 2
  }
});

export default BoxScreen;