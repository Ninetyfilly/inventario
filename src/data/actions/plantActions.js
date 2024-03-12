import realm from '../models/plantModel'; // Importa el archivo donde definiste tu esquema

export const addPlant = item => {
  const plants = getAllPlants();
  console.log('item', plants.data.length);

  let id = plants.data.length + 1 ?? 1;

  realm.write(() => {
    realm.create('Plant', {...item, id});
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
    error: false,
  };
};

export const deletePlant = name => {
  const plant = realm.objects('Plant').filtered('name = $0', name);

  if (plant.length > 0) {
    realm.write(() => {
      realm.delete(plant);
    });
    return {
      data: {},
      message: 'borrado exitoso',
      error: false,
    };
  } else {
    console.log(`No se encontró ningún coche con name ${name}.`);
    return {
      data: {},
      message: '`No se encontró ningún coche con name',
      error: true,
    };
  }
};

export const getAllPlants = name => {
  let plants;
  if (name) {
    plants = realm.objects('Plant').filtered('name = $0', name);
  } else {
    plants = realm.objects('Plant');
  }
  return {
    data: plants,
    message: 'Consulta exitosa',
    error: false,
  };
};
