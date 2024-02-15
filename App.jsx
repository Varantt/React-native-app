import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import FlatCard from './components/flatCard/FlatCard';
import TrendingCard from './components/trendingCard/TrendingCard';
import BlogCard from './components/blogCard/BlogCard';
import Contact from './components/contact/Contact';

const App = () => {
  const [flatCardColors, setFlatCardColors] = useState([
    'red',
    'green',
    'blue',
    'orange',
    'purple',
  ]);

  const renderFlatCard = ({item}) => {
    return <FlatCard color={item} headingStyle={styles.headingText} />;
  };

  const mainListData = [
    {type: 'flatCards', data: flatCardColors},
    {type: 'trendingCard'},
    {type: 'blogCard'},
    {type: 'contact'},
  ];

  const renderMainItem = ({item}) => {
    switch (item.type) {
      case 'flatCards':
        return (
          <View>
            <Text style = {styles.headingText}>Flat Cards</Text>
            <View style={styles.cardsContainer}>
              <FlatList
                data={item.data}
                renderItem={renderFlatCard}
                horizontal
                keyExtractor={(item, index) => `flatCard-${index}`}
              />
            </View>
          </View>
        );

      case 'trendingCard':
        return <TrendingCard headingStyle={styles.headingText} />;

      case 'blogCard':
        return <BlogCard headingStyle={styles.headingText} />;

      case 'contact':
        return <Contact headingStyle={styles.headingText} />;
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        data={mainListData}
        renderItem={renderMainItem}
        keyExtractor={(item, index) => item.type + index}
      />
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
  },
});

export default App;
