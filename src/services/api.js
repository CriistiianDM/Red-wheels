import axios from "axios";

// eslint-disable-next-line import/no-mutable-exports
export let baseURL = "https://redwheels-backend-fwbdqk677a-uw.a.run.app/concesionario";

const instance = axios.create({
    baseURL,
});

export default instance;
