import instance from "./api";

/**
 *  @author <cristian.machado@correounivalle.edu.co>
 *  @description This function gets all the users from the database.
*/
export function getGestionUser() {
    return instance.get(`/api/v1/usuario`);
}