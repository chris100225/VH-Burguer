import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const apiLocal = "https://localhost:7029/api/";

const apiRemota = "";

//criar um endereco da api dentro do axios
export const api = axios.create({
    baseURL: apiLocal
})

//intercepta todas as informações antes de ser enviada(axios)
api.interceptors.request.use((config) => {
    const token = secureLocalStorage.getItem("Token");
    if (token) {
        config.headers.Authorization = "Bearer " + token;
    }

    return config;
})