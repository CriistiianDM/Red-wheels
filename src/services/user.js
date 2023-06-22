import instance, { baseURL } from "./api";

export function login(credentials) {
    return instance.post("/concesionario/login/", credentials);
}

export function register(credentials) {
    return instance.post("/concesionario/api/v1/usuario/", credentials);
}
