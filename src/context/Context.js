import React, { createContext, useReducer } from "react";
import { Alert } from "react-native";
import db from '@react-native-firebase/firestore';

const Context = createContext();

const initialState = {
    items: [],
    totalValue: 0,
    favorites: [],
    purchases: [],
    users: [],
    user: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload ? { ...item, count: Math.min(99, item.count + 1) } : item
                ),
            };
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload ? { ...item, count: Math.max(1, item.count - 1) } : item
                ),
            };
        case 'DELETE_ITEM':
            if (!action.payload) return state;
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case 'GET_TOTAL':
            return {
                ...state,
                totalValue: state.items
                    .filter(item => item.isSelected)
                    .reduce((total, item) => total + (item.value * item.count), 0),
            };
        case 'ADD_ITEM':
            console.log('Payload', action.payload);
            return state.items.some(item => item.id === action.payload.id) ? state :
                {
                    ...state,
                    items: [...state.items, action.payload],
                };
        case 'SET_FAVORITES':
            return {
                ...state,
                favorites: action.payload,
            };
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };

        case 'ADD_PURCHASES':
            return {
                ...state,
                purchases: [...state.purchases, ...action.payload],
                items: [],
            };
        case 'REGISTER_USER':
            const { userName, password } = action.payload;
            db()
                .collection('users')
                .where('userName', '==', userName)
                .get()
                .then(querySnapshot => {
                    if (!querySnapshot.empty) {
                        Alert.alert('El nombre de usuario ya existe.');
                    } else {
                        db()
                            .collection('users')
                            .add({ userName, password })
                            .then(() => {
                                Alert.alert('Usuario registrado exitosamente.');
                            })
                            .catch((error) => {
                                console.error('Error al registrar usuario: ', error);
                                Alert.alert('Error al registrar el usuario.');
                            });
                    }
                })
                .catch((error) => {
                    console.error('Error al verificar usuario: ', error);
                });

            return state;
        case 'VALIDATE_USER':
            const { userName: loginUser, password: loginPassword } = action.payload;
            db()
                .collection('users')
                .where('userName', '==', loginUser)
                .where('password', '==', loginPassword)
                .get()
                .then(querySnapshot => {
                    if (!querySnapshot.empty) {
                        Alert.alert('Inicio de sesión exitoso.');
                        return { ...state, isAuthenticated: true, user: querySnapshot.docs[0].data() };
                    } else {
                        Alert.alert('Usuario o contraseña incorrectos.');
                        return { ...state, isAuthenticated: false };
                    }
                })
                .catch((error) => {
                    console.error('Error al validar usuario: ', error);
                    Alert.alert('Error al validar el usuario.');
                });

            return state;
        case 'UPDATE_USER':
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        case 'SELECT_ITEM':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload ? { ...item, isSelected: !item.isSelected } : item
                )
            }
        default:
            return state;
    }
}

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('Estado inicial del proveedor', state);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default Context;