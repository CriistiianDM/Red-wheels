import instance from "./api";

/**
 *  @author <cristian.machado@correounivalle.edu.co>
 *  @description This function gets all the users from the database.
*/
export function getGestionUser() {
    return instance.get(`/api/v1/usuario/`);
}

export function updateUser(id ,credentials) {
    console.log(credentials);
    return instance.put(`/api/v1/usuario/${id}/`, credentials);
}