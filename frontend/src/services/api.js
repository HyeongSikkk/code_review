import axios from "axios";

const API_URL = "/api/";

export const getHelloMessage = async () => {
    const response = await axios.get(`${API_URL}hello/`);
    return response.data;
}