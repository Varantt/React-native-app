import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const TrendingCard = ({headingStyle}) => {
  return (
    <View>
      <Text style={headingStyle}>Trending places</Text>
      <View style = {{padding: 8}}>
        <View style={styles.trendingCard}>
          <Image
            source={require('../../assets/imgs/trending.jpg')}
            style={styles.trendingImg}
          />
          <View style={styles.trendingCardContent}>
            <View>

            <Text style={styles.trendingCardText}> Rome</Text>
            <Text style={{fontSize: 16, color: '#000'}}> Italy, Europe</Text>
            </View>
            <Text style={styles.trendingCardText}> 12 mins away</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrendingCard;

const styles = StyleSheet.create({
  trendingCard: {
    height: 350,
    // padding: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  trendingImg: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  trendingCardText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  trendingCardContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 4
  },
});
