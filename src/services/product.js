import instance from "./api";

/**
 * Creates a new vehicle.
 * @param {object} credentials
 * @returns
 */
export function vehicle(data) {
    return instance.post("/api/v1/vehiculo/", data);
}

/**
 * Gets all vehicles given a sucursal.
 * @param {object} credentials
 * @returns
 */
export function vehicles(credentials) {
    return instance.get(`/api/v1/vehiculo?sucursal_id=${credentials.sucursal}`);
}

/**
 * Gets an specific vehicle given a type.
 * @param {object} type
 * @returns
 */
export function specificVehicle(type) {
    return instance.get(`/api/v1/vehiculo/list_vehiculos?tipo=${type.type}`);
}
