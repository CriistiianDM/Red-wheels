import instance, { baseURL } from "./api";

export function login(credentials) {
    return instance.post("/concesionario/login/", credentials);
}
