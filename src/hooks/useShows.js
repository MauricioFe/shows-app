import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import api from '../services/api';
export function useShows() {
    const { state, dispatch } = useContext(AppContext);
    useEffect(() => {
        api.get("/shows").then((response) => {
            const action = { type: "createList", payload: response.data }
            dispatch(action)
        });
    }, []);

    return { shows: state.showList };
}
