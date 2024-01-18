import axios from "axios";

const api = axios.create({
    baseURL: "https://iaforecastingbk.onrender.com"
})


export default api;