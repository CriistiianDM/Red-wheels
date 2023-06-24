import { userActions } from "../../actions/userActions";

const loggedJSON = window.localStorage.getItem("logged");
const user = JSON.parse(loggedJSON);

export const userInitialState = {
    auth: user?.isAuth || false,
    userId: user?.userId || "",
    user: user?.userName || "", // The user's name that is shown in the profile and navbar.
    username: user?.username || "", // Username of the user.
    userFullName: "", // Full name of the user.
    userName: "", // Input value of the user's name.
    userLastname: "", // Input value of the user's lastname.
    userEmail: "", // Input value of the user's email.
    userPassword: "", // Input value of the user's password.
    token: user?.token || "",
};

export function userReducer(state, action) {
    switch (action.type) {
        case userActions.SET_AUTH:
            return { ...state, auth: action.payload };
        case userActions.SET_USER_ID:
            return { ...state, userId: action.payload };
        case userActions.SET_USER:
            return { ...state, user: action.payload };
        case userActions.SET_USER_FULL_NAME:
            return {
                ...state,
                user: action.payload.userName,
                userFullName: `${action.payload.userName} ${action.payload.userLastname}`,
            };
        case userActions.SET_USERNAME:
            return { ...state, username: action.payload };
        case userActions.SET_USER_NAME:
            return { ...state, userName: action.payload };
        case userActions.SET_LASTNAME:
            return { ...state, userLastname: action.payload };
        case userActions.SET_EMAIL:
            return { ...state, userEmail: action.payload };
        case userActions.SET_PASSWORD:
            return { ...state, userPassword: action.payload };
        case userActions.SET_TOKEN:
            return { ...state, token: action.payload };
        case userActions.RESET_SESSION:
            return {
                ...state,
                auth: false,
                user: "",
                username: "",
                token: "",
                userId: "",
            };
        case userActions.RESET_FORM:
            return {
                ...state,
                userName: "",
                userLastname: "",
                userEmail: "",
                userPassword: "",
            };
        default:
            return state;
    }
}
