//import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

const HomeScreen = () => {
  //const {userInfo, isLoading, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      
      <Text style={styles.welcome}>Welcomes</Text>
      <Button title="Logout" color="red"  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default HomeScreen;
