import instance from "./api";

export function vehicles(credentials) {
    return instance.get(`/api/v1/vehiculo?sucursal_id=${credentials.sucursal}`, credentials);
}
