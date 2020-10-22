import { useState, useEffect } from 'react';
import api from '../services/api';
export function useShows() {
    const [listShow, setListShows] = useState(null)
    useEffect(() => {
        api.get("/shows").then((response) => {
            setListShows(response.data)
        });
    }, []);

    return { shows: listShow };
}
