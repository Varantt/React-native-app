import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards({color, flatCardIndex, headingStyle}) {
  return (
    <View style={[styles.flatCard, {backgroundColor: color}]}>
      <View>
        <Text style={[headingStyle, {color: 'white'}]}>{color}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatCard: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginRight: 10
    // flex: 1,
  },
  
});
