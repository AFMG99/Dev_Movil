import firestore from '@react-native-firebase/firestore';
import { departments, cities } from './components/Data'; // Importa los datos de departamentos y ciudades

// Función para cargar los departamentos y ciudades a Firebase
// Función para cargar los departamentos y ciudades a Firebase
const uploadDepartmentsAndCities = async () => {
    try {
        // Recorrer los departamentos
        for (const department of departments) {
            // Añadir cada departamento a la colección "departments" y dejar que Firebase genere un ID automáticamente
            const departmentRef = await firestore()
                .collection('departments')
                .add({
                    name: department.name,
                });

            // Obtener el ID generado por Firebase para este departamento
            const departmentId = departmentRef.id;

            // Obtener las ciudades para este departamento
            const departmentCities = cities[department.id] || [];

            // Añadir las ciudades como subcolección del departamento utilizando el ID generado
            for (const city of departmentCities) {
                await firestore()
                    .collection('departments')
                    .doc(departmentId) // Usa el ID generado
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

// Llama a la función cuando quieras cargar los datos
uploadDepartmentsAndCities();