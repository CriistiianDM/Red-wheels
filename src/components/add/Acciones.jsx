//import libs
import React from "react";
import FormProfile from "./Form";
import "./Prod.css";
import FooterLogin from "../login/FooterLogin";

const Acciones = ({ title }) => {
    const [newTitle, setNewTitle] = React.useState("");

    React.useEffect(() => {
        setNewTitle(title.toUpperCase());
    }, [newTitle]);

    return (
        <>
            <main className="_container_profile_actions">
                <h1 className="_name_profile">{`AGREGAR ${newTitle}`}</h1>
                <FormProfile />
                <FooterLogin />
            </main>
        </>
    );
};

export default Acciones;
