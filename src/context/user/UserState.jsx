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

    const setUserRole = (role) => {
        dispatch({ type: userActions.SET_USER_ROLE, payload: role });
    };

    const setUsername = (user) => {
        dispatch({ type: userActions.SET_USERNAME, payload: user });
    };

    const setUserEmail = (email) => {
        dispatch({ type: userActions.SET_EMAIL, payload: email });
    };

    const setUserPassword = (password) => {
        dispatch({ type: userActions.SET_PASSWORD, payload: password });
    };

    const setSucursalId = (sucursalId) => {
        dispatch({ type: userActions.SET_SURCURSAL_ID, payload: sucursalId });
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
            userRole: state.userRole,
            setUserRole,
            userId: state.userId,
            setUserId,
            username: state.username,
            setUsername,
            userEmail: state.userEmail,
            surcursalId: state.surcursalId,
            setSucursalId,
            setUserEmail,
            resetSession,
            resetForm,
        }),
        [state.auth, state.userRole, state.userId, state.username, state.userEmail , state.sucursalId],
    );

    return <UserContext.Provider value={valueProps}>{children}</UserContext.Provider>;
}

export default UserState;
