import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';

const ListElement = ({item, index, showModal, setShowModal}) => {
  const onPress = () => {
    console.log(item);

    setShowModal({
      visible: true,
      element: item,
    });
  };

  return (
    <Pressable onLongPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.title}>Nombre de la planta: {item.name}</Text>
        <Text style={styles.title}>
          Numero de plantas: {item.numberOfPlants}
        </Text>
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
    color: 'white',
  },
});
export default ListElement;
