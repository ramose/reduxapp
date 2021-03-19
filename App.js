/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {add, substract} from './actions/count';
import {useSelector, useDispatch} from 'react-redux';

const App = (props) => {
  const data = useSelector((data) => data.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>OK</Text>
      <Button title="Increment" onPress={() => dispatch(add())} />
      <Text style={{fontSize: 40}}>{data}</Text>
      <Button title="Decrement" onPress={() => dispatch(substract())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
