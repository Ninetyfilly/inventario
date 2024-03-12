import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  Image,
  TextInput,
} from 'react-native';
import {addPlant} from '../../data/actions/plantActions';

const AddPlant = ({modalVisible, setModalVisible}) => {
  const [plantName, setPlantName] = React.useState('');
  const [numberOfPlants, setNumberOfPlants] = React.useState('');
  const [image, setImage] = React.useState('');

  let img = {
    uri: 'https://get.pxhere.com/photo/grass-blossom-plant-flower-herb-botany-flora-wildflower-shrub-macedonia-flowering-plant-verbena-lantana-camara-verbena-family-annual-plant-land-plant-dames-rocket-change-color-of-grass-1202434.jpg',
  };

  const loadData = () => {
    const request = addPlant({
      name: plantName,
      numberOfPlants: parseInt(numberOfPlants, 10),
      img: img.uri,
    });
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>x</Text>
              </Pressable>
            </View>

            <TextInput
              value={plantName}
              onChangeText={value => setPlantName(value)}
              placeholder="macedonia"
              style={styles.inputForm}
              placeholderTextColor={'white'}
            />

            <TextInput
              value={numberOfPlants}
              keyboardType="numeric"
              onChangeText={value => setNumberOfPlants(value)}
              placeholder="15"
              style={styles.inputForm}
              placeholderTextColor={'white'}
            />

            <Image style={styles.logo} source={img} />

            <Pressable
              style={[styles.button, styles.buttonAdd]}
              onPress={() => loadData()}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default AddPlant;
