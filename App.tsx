import React, {useState} from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet} from 'react-native';

function App() {
  const [buttonTitle, setButtonTitle] = useState('Click Here!'); // Declare state inside the component

  const handleBtnBackgroundColor = () => {
    setButtonTitle('Clicked!');
  };

  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Text style={{textAlign: 'center'}}>Hello World!</Text>
        <Button
          title={buttonTitle}
          color={'red'}
          onPress={handleBtnBackgroundColor}
          accessibilityLabel="Click this to change this button's color"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'red',
    color: 'white',
    width: 150,
    height: 50,
  },
});

export default App; // Moved export statement to the bottom
