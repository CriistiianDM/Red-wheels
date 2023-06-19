import axios from "axios";

// eslint-disable-next-line import/no-mutable-exports
export let baseURL = "http://localhost:8000";

const instance = axios.create({
    baseURL,
});

export default instance;