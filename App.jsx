import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import FlatCard from './components/flatCard/FlatCard';
import TrendingCard from './components/trendingCard/TrendingCard';

const App = () => {
  const [flatCardColors, setFlatCardColors] = useState([
    'red',
    'green',
    'blue',
    'orange',
    'purple',
  ]);
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.cardsContainer}>
          <ScrollView horizontal>
            {flatCardColors.map((flatCardColor, index) => {
              return <FlatCard color={flatCardColor} key={index} headingStyle = {styles.headingText} />;
            })}
          </ScrollView>
        </View>
      </View>

      <TrendingCard headingStyle={styles.headingText} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  cardsContainer: {
    flexDirection: 'row',
    padding: 8,
    // flex: 1,
    gap: 16,
  },
});

export default App;
