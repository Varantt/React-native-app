import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {contacts} from '../../data';

const Contact = ({headingStyle}) => {
  return (
    <View>
      <Text style={headingStyle}>Contacts</Text>
      {contacts.map((contact, index) => {
        const {img, name, status} = contact;
        return (
          <View style={styles.contact} key={index}>
            <View style={styles.imageContainer}>
              <Image
                source={img}
                style={{width: 50, height: 50, borderRadius: 40}}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  contact: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  imageContainer: {
    borderRadius: 50,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
});
