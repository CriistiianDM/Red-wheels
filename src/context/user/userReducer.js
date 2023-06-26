import { userActions } from "../../actions/userActions";

const loggedJSON = window.localStorage.getItem("logged");
const userJSON = JSON.parse(loggedJSON);
const user = userJSON ? userJSON.data : null;

export const userInitialState = {
    auth: user?.isAuth || false, // If the user is logged in.
    userId: user?.id || "",
    userRole: user?.tipoUsuario || "", // Role of the user.
    username: user?.username || "", // Username of the user.
    userEmail: user?.email, // Input value of the user's email.
};

export function userReducer(state, action) {
    switch (action.type) {
        case userActions.SET_AUTH:
            return { ...state, auth: action.payload };
        case userActions.SET_USER_ROLE:
            return { ...state, userRole: action.payload };
        case userActions.SET_USER_ID:
            return { ...state, userId: action.payload };
        case userActions.SET_USERNAME:
            return { ...state, username: action.payload };
        case userActions.SET_EMAIL:
            return { ...state, userEmail: action.payload };
        case userActions.RESET_SESSION:
            return {
                ...state,
                auth: false,
                userId: "",
                userRole: "",
                username: "",
                userEmail: "",
            };
        case userActions.RESET_FORM:
            return {
                ...state,
                userName: "",
                userEmail: "",
                userPassword: "",
            };
        default:
            return state;
    }
}
