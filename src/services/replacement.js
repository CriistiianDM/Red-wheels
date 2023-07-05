import instance from "./api";

/**
 * Creates a new replacement.
 * @param {object} data
 * @returns
 */
export function replacement(data) {
    return instance.post("/api/v1/repuesto/", data);
}

/**
 * Gets all replacements given a sucursal.
 * @param {object} sucursal
 * @returns
 */
export function replacements(sucursal) {
    return instance.get(`/api/v1/repuesto?sucursal_id=${sucursal.id}`);
}

/**
 * Gets all replacements.
 * @returns
 */
export function allReplacements() {
    return instance.get(`/api/v1/repuesto/`);
}
