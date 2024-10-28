import firestore from '@react-native-firebase/firestore';
import { departments, cities } from './components/Data';

const uploadDepartmentsAndCities = async () => {
    try {
        for (const department of departments) {
            const departmentRef = await firestore()
                .collection('departments')
                .add({
                    name: department.name,
                });

            const departmentId = departmentRef.id;

            const departmentCities = cities[department.id] || [];

            for (const city of departmentCities) {
                await firestore()
                    .collection('departments')
                    .doc(departmentId) 
                    .collection('cities')
                    .add({
                        name: city,
                    });
            }
        }

        console.log('Departamentos y ciudades subidos correctamente.');
    } catch (error) {
        console.error('Error al subir departamentos y ciudades:', error);
    }
};

uploadDepartmentsAndCities();