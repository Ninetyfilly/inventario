import Realm from 'realm';

class Plant extends Realm.Object {}
Plant.schema = {
  name: 'Plant',
  primaryKey: 'id',

  properties: {
    id: 'int',
    name: 'string',
    numberOfPlants: 'int',
    img: 'string',
  },
};

export default new Realm({schema: [Plant]});
