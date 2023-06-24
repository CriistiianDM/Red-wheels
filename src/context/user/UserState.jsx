import React from "react";
import { useReducer, useMemo } from "react";
import UserContext from "./UserContext";
import { userInitialState, userReducer } from "./userReducer";
import { userActions } from "../../actions/userActions";

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
            username: state.username,
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
