import instance from "./api";

export function subsidiaries() {
    return instance.get("/api/v1/sucursal");
}
