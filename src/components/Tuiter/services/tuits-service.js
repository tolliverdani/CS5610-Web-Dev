import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    if ( response.status === 200 ) {
        return response.data;
    } else {
        return [];
    }
}

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    if ( response.status === 200 ) {
        return response.data.data;
    } else {
        return [];
    }
}

export const deleteTuit = async (tuit) => {
    const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
    if ( response.status === 200 ) {
        return response.data;
    } else {
        return [];
    }
}

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    if ( response.status === 200 ) {
        return response.data;
    } else {
        return [];
    }
}
