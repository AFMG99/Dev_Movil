import React from "react";
import {View, Text, Image, Button} from 'react-native'
import styles from '../styles/globalStyles'

const MascotaCard = ({mascota}) => {
    return(
        <View style = {styles.card}>
            <Image source={{uri: mascota.foto}} style = {styles.foto}/>
            <Text style={styles.nombre}>Nombre de la Mascota: {mascota.nombre}</Text>
            <Text>Tipo de Mascota: {mascota.tipo}</Text>
            <Text>Raza de la Mascota: {mascota.raza}</Text>
            <Text>Edad de la Mascota: {mascota.edad}</Text>
            <Text>Dueño de la Mascota: {mascota.dueno}</Text>
            <Text>Veterinario de la Mascota: {mascota.veterinario}</Text>
            <Button title="Agendar cita"/>
        </View>
    );
};

export default MascotaCard;