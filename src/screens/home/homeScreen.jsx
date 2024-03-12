import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListScreen from '../list/listScreen';
import AddPlant from './addPlant';

const Home = ({isDarkMode, setIsDarkMode}) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const fontColorStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  return (
    <View style={[styles.sectionContainer, backgroundStyle]}>
      <Button onPress={() => setIsDarkMode(!isDarkMode)} title="dark Mode" />
      <Text style={[styles.sectionTitle, fontColorStyle]}>Home</Text>
      <Button
        onPress={() => setModalVisible(!modalVisible)}
        title="Agregar Planta"
      />
      <AddPlant modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <ListScreen />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 54,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
