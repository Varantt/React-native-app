import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const BlogCards = ({headingStyle}) => {
  return (
    <View>
      <Text style={headingStyle}>Blog Card</Text>
      <View style={{paddingBottom: 16, paddingHorizontal: 8}}>
        <View style={styles.blogCard}>
          <Text style={styles.blogHeader}>What's new in javascript ?</Text>
          <Image
            style={styles.blogImage}
            source={{
              uri: 'https://thecornerae.com/wp-content/uploads/2024/01/Makani-and-maskan.webp',
            }}
          />

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogCards;

const styles = StyleSheet.create({
  blogCard: {
    width: '100%',
    height: 450,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3.85,
    shadowOpacity: 0.25,
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  blogHeader: {
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  blogImage: {
    width: '100%',
    height: 300,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btn: {
    backgroundColor: '#000',
    padding: 10,
    // width: 100,
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    // borderLeftBottomRadius: 10
  },
  btnText: {
    color: 'white',
  },
});
