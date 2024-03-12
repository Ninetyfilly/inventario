import realm from '../models/plantModel'; // Importa el archivo donde definiste tu esquema

export const addPlant = ({item}) => {
  // Añadir un coche a la base de datos
  realm.write(() => {
    realm.create('Plant', item);
  });
};

export const modifiPlant = () => {
  // Añadir un coche a la base de datos
  realm.write(() => {
    realm.create('Plant', {make: 'Toyota', model: 'Camry', year: 2022});
  });
  return {
    data: {},
    message: 'modificacion exitosa exitoso',
  };
};

export const deletePlant = () => {
  // Añadir un coche a la base de datos
  realm.write(() => {
    realm.create('Plant', {make: 'Toyota', model: 'Camry', year: 2022});
    return {
      data: {},
      message: 'borrado exitoso',
    };
  });
};

export const getAllPlants = () => {
  const Plants = realm.objects('Plant');
  return {
    data: Plants,
    message: 'borrado exitoso',
  };
};
