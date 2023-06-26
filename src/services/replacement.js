import instance from "./api";

export function replacements(sucursal) {
    return instance.get(`/api/v1/repuesto?sucursal_id=${sucursal.id}`);
}
