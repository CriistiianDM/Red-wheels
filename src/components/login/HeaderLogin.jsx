import React from "react";
import { 
    useNavigate 
} 
from "react-router-dom";


const HeaderLogin = () => {
     const navigate = useNavigate();
     return (

            <>
                <header className="_container_header_login">
                    <a style={{ cursor: 'pointer' }} onClick={ () => { navigate('/')}}>
                        <img src="/assets/icon/logotipo.png" alt="logo" />
                    </a>
                </header>
            </>
     )
}

export default HeaderLogin;