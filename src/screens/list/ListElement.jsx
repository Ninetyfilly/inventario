import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';

const ListElement = ({item, index, showModal, setShowModal}) => {
  const onPress = () => {
    setShowModal({
      visible: true,
      element: item,
    });
  };
  return (
    <Pressable onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.title}>Hola soy el item {item.plant}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f25e5e',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  title: {
    fontSize: 32,
  },
});
export default ListElement;
