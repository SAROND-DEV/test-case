import axios from "axios";

const instance = axios.create({
    baseURL: "https://joki-joya.ru/api",
});

export default instance;
