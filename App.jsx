import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  useColorScheme
} from 'react-native';
import React, {useState} from 'react';
import FlatCard from './components/flatCard/FlatCard';
import TrendingCard from './components/trendingCard/TrendingCard';
import BlogCard from './components/blogCard/BlogCard'

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
      <ScrollView vertical>
        <View>
          <Text style={styles.headingText}>Flat Cards</Text>
          <View style={styles.cardsContainer}>
            <ScrollView horizontal>
              {flatCardColors.map((flatCardColor, index) => {
                return (
                  <FlatCard
                    color={flatCardColor}
                    key={index}
                    headingStyle={styles.headingText}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>

        <TrendingCard headingStyle={styles.headingText} />
        <BlogCard headingStyle={styles.headingText} />
      </ScrollView>
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
