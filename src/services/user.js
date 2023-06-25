import instance from "./api";

export function login(credentials) {
    return instance.post("/login/", credentials);
}

export function register(credentials) {
    return instance.post("/api/v1/usuario/", credentials);
}
