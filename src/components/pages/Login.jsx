import React from 'react';
import HeaderLogin from '../login/HeaderLogin';
import FormLogin from '../login/FormLogin';
import FooterLogin from '../login/FooterLogin';


const Login = () => {

    React.useEffect(() => {

        document.getElementById('_body')
        .classList.add('_background_general_');

    }, []);

    return (
        <>
            <HeaderLogin />
            <FormLogin />
            <FooterLogin />
        </>
    )

};


export default Login;