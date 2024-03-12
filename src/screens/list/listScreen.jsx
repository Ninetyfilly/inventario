import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import ListElement from './ListElement';
import PlantSchema from '../../data/models/plantModel';
import {getAllPlants} from '../../data/actions/plantActions';

import Realm from 'realm';

const ListScreen = () => {
  // const plants = [
  //   {id: 0, plant: 'macedonia', cantidad: 5},
  //   {id: 1, plant: 'Margarita', cantidad: 5},
  // ];
  const [showModal, setShowModal] = React.useState({
    visible: false,
    element: {},
  });

  const [plants, setPlants] = React.useState([]);

  React.useEffect(() => {
    if (showModal.visiblel) {
      return;
    }
    console.log('enseñar plantas');
    let plantas = getAllPlants();
    setPlants(plantas.data);
    return () => {};
  }, [showModal]);

  return (
    <View styles={styles.container}>
      <FlatList
        data={plants}
        renderItem={({item, index}) => (
          <ListElement
            index={index}
            item={item}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListScreen;
