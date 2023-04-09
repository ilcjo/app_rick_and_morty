import {
    ADD_FAV,
    REMOVE_FAV,
    FILTERCARDS,
    ORDERCARDS,
    RESET
} from "./types";

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
};

export const filterCards = (gender) => {
    return {
        type: FILTERCARDS,
        payload: gender
    }
};

export const orderCards = (orden) => {

    return {
        type: ORDERCARDS,
        payload: orden
    }

};

export const reset = () => {
    return {
        type: RESET,
    }
}

