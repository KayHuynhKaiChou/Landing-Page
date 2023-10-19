import { API_URL } from "../constants";

export const getCourses = async () => {
    const res = await fetch(`${API_URL}/courses`,{
        method : 'GET'
    });
    return await res.json();
};