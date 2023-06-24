import React from "react";
import HeaderRegister from "../register/HeaderRegister";
import FormRegister from "../register/FormRegister";
import FooterRegister from "../register/FooterRegister";

const Login = () => {
    React.useEffect(() => {
        document.getElementById("_body").classList.add("_background_general_");
    }, []);

    return (
        <>
            <HeaderRegister />
            <FormRegister />
            <FooterRegister />
        </>
    );
};

export default Login;
