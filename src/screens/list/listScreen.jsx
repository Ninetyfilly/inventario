import React from 'react';
import {Text, StyleSheet, View, FlatList, Modal, Pressable} from 'react-native';
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowModal({
            visible: false,
            element: {},
          });
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() =>
                  setShowModal({
                    visible: false,
                    element: {},
                  })
                }>
                <Text style={styles.textStyle}>x</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
    borderRadius: 15,
  },
  modalView: {
    margin: 20,
    width: '80%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#851d1d',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonAdd: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'center',
  },
  closeView: {
    alignSelf: 'flex-end',
  },
  inputForm: {
    backgroundColor: '#9e8e8e',
    marginBottom: 15,
    width: '80%',
    borderRadius: 15,
    // tintColor: 'white',
  },
});

export default ListScreen;
