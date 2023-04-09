import {
    ADD_FAV,
    REMOVE_FAV,
    FILTERCARDS,
    ORDERCARDS,
    RESET
} from './types'


const initialState = {
    myFavorites: [],
    allCharacters: [],

};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,

                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }

        case REMOVE_FAV:
            const newFav = state.allCharacters.filter((ch) => ch.id !== action.payload);
            return {
                ...state,

                myFavorites: newFav,
                allCharacters: newFav

            };

        case FILTERCARDS:
            const genderF = state.allCharacters.filter((cha) => cha.gender === action.payload)

            return {
                ...state,

                myFavorites: genderF

            };

        case ORDERCARDS:
            const order = state.allCharacters.sort((a, b) => {
                if (a.id > b.id) {
                    return 'Ascendente' === action.payload ? 1 : -1
                }
                if (a.id < b.id) {
                    return 'Descendente' === action.payload ? 1 : -1
                }
                return 0;
            })
            return {
                ...state,

                myFavorites: order,
            }

            case RESET:
                return{
                    ...state,
                    myFavorites: [...state.allCharacters],
                }

        default:
            return { ...state }
    }
};




