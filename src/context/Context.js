import React, { createContext, useReducer } from "react";
import { Alert } from "react-native";

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
        case 'ADD_TO_FAVORITE':
            return state.favorites.some(item => item.id === action.payload.id) ? state :
                {
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
            if (state.users.some(user => user.userName === action.payload.userName)) {
                Alert.alert('El nombre de usuario ya existe.');
                return state;
            }
            const updatedUsers = [...state.users, action.payload];
            console.log("Usuarios después del registro:", updatedUsers);
            return {
                ...state,
                users: updatedUsers,
                user: action.payload,
            };
        case 'VALIDATE_USER':
            const findUser = state.users.find(
                user => user.userName === action.payload.userName && user.password === action.payload.password,
            );
            console.log("Usuario encontrado:", findUser)
            if (findUser) {
                return { ...state, isAuthenticated: true }
            } else {
                return { ...state, isAuthenticated: false }
            }
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