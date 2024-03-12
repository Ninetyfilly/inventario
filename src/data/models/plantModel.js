import Realm from 'realm';

class Plant extends Realm.Object {}
Plant.schema = {
  name: 'Plant',
  properties: {
    name: 'string',
    numberOfPlants: 'string',
    img: 'int',
  },
};

export default new Realm({schema: [Plant]});
