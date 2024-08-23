import React from "react";
import { View, Text, FlatList } from 'react-native';
import MascotaCard from './MascotaCard';

const mascotas = [
  {
    id: 1,
    foto: 'https://as01.epimg.net/diarioas/imagenes/2021/11/19/actualidad/1637338435_683878_1637338495_noticia_normal_recorte1.jpg',
    nombre: 'Firulais',
    tipo: 'Canino',
    raza: 'Pitbull',
    edad: 5,
    dueno: 'Vee',
    veterinario: 'Lucas Salsero'
  },
  {
    id: 2,
    foto: 'https://www.lapulgada.co/cdn/shop/collections/gato-persa-2_675x675.png?v=1721917322',
    nombre: 'Ernesto',
    tipo: 'Felino',
    raza: 'Persa',
    edad: 1,
    dueno: 'Juliana',
    veterinario: 'Octavio'
  }
];

const Vet = () => {
  return (
    <View>
      <Text>App Veterinaria</Text>
      <FlatList
        data={mascotas}
        renderItem={({ item }) => <MascotaCard mascota={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Vet;
