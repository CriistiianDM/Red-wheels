import { useReducer, useMemo } from "react";
import UserContext from "./UserContext";
import { userInitialState, userReducer } from "./userReducer";
import { userActions } from "../../actions/userActions";
import { getUserFullName, getUsername } from "../../services/user";

/**
 * States and dispatches for the auth context.
 * @param {object} {children}
 * @returns {JSX.Element} - UserContext.Provider.
 */
function UserState({ children }) {
    const [state, dispatch] = useReducer(userReducer, userInitialState);

    const setAuth = (boolean) => {
        dispatch({ type: userActions.SET_AUTH, payload: boolean });
    };

    const setUserId = (id) => {
        dispatch({ type: userActions.SET_USER_ID, payload: id });
    };

    const setUser = (user) => {
        dispatch({ type: userActions.SET_USER, payload: user });
    };

    const setUserFullName = async (token) => {
        try {
            const response = await getUserFullName(token);

            const { data } = response;

            dispatch({ type: userActions.SET_USER_FULL_NAME, payload: data });
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * When the user logs in or signs up, the token is going to be the username,
     * otherwise is going to be fetched.
     * @param {string} token - Token or username.
     * @param {boolean} isFetch - If the username must be fetched.
     */
    const setUsername = async (token, isFetch = false) => {
        if (isFetch) {
            try {
                const response = await getUsername(token);

                const { data } = response;

                dispatch({ type: userActions.SET_USERNAME, payload: data.username });
            } catch (error) {
                console.log(error);
            }
        } else {
            // The token could be the name as well.
            dispatch({ type: userActions.SET_USERNAME, payload: token });
        }
    };

    const setUserName = (name) => {
        dispatch({ type: userActions.SET_USER_NAME, payload: name });
    };

    const setUserLastname = (lastname) => {
        dispatch({ type: userActions.SET_LASTNAME, payload: lastname });
    };

    const setUserEmail = (email) => {
        dispatch({ type: userActions.SET_EMAIL, payload: email });
    };

    const setUserPassword = (password) => {
        dispatch({ type: userActions.SET_PASSWORD, payload: password });
    };

    const setToken = (token) => {
        dispatch({ type: userActions.SET_TOKEN, payload: token });
    };

    /**
     * Resets the session.
     */
    const resetSession = () => {
        dispatch({ type: userActions.RESET_SESSION });
    };

    /**
     * Resets the form values in the login and register components.
     */
    const resetForm = () => {
        dispatch({ type: userActions.RESET_FORM });
    };

    const valueProps = useMemo(
        () => ({
            auth: state.auth,
            setAuth,
            userId: state.userId,
            setUserId,
            user: state.user,
            setUser,
            userFullName: state.userFullName,
            setUserFullName,
            username: state.username,
            setUsername,
            userName: state.userName,
            setUserName,
            userLastname: state.userLastname,
            setUserLastname,
            userEmail: state.userEmail,
            setUserEmail,
            userPassword: state.userPassword,
            setUserPassword,
            token: state.token,
            setToken,
            resetSession,
            resetForm,
        }),
        [
            state.auth,
            state.userId,
            state.user,
            state.userFullName,
            state.username,
            state.userName,
            state.userLastname,
            state.userEmail,
            state.userPassword,
            state.token,
        ],
    );

    return <UserContext.Provider value={valueProps}>{children}</UserContext.Provider>;
}

export default UserState;
