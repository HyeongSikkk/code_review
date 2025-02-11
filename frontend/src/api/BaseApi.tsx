import axios from "axios";

const BaseApi = axios.create({
    baseURL: "http://222.100.174.159:25565/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default BaseApi;