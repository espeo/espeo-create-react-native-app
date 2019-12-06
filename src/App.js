import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Espeo Create React Native App</Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
