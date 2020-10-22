//variaveis globais na aplicação. 

import { createContext } from "react";

// O reducer so permite que essas variaveis globais sejam modificadas 
//apenas a partir de uma action. 
export const AppContext = createContext();
export const appReducer = (state, action) => {
    //As ações vão definir o que podemos ou não fazer com as variaveis.

    switch (action.type) {
        case "createList":
            return { showList: action.payload };
        case "setItemSelected":
            return { ...state, itemSelected: action.payload };
        case "addItem":
            const showList = state.showList;
            showList.push(action.payload);
            return { ...state, showList };
        default:
            return state;
    }
}

export const initialState = {
    showList: new Array(),
    itemSelected: null,
}