//import libs
import React , { useContext } from 'react';
import FormProfile from './FormProfile';
import './profile.css'
import FooterLogin from '../login/FooterLogin';
import { useNavigate } from 'react-router-dom';
import UserContext from "../../context/user/UserContext";

//create a component
const ProfileActions = ({
    img_profile,
    name,
}) => {

     const [isLogged, setIsLogged] = React.useState(false);
     const navigate = useNavigate();
     const {  username  } = useContext(UserContext);
     
     const [ data, setData ] = React.useState({
            img_profile: 'CristianK',
            name: ''
    })

    //la magia ocurre aqui :v
    React.useEffect(() => {
        setData({
            img_profile: img_profile? img_profile : '/assets/icon/profile.svg',
            name: name? name : 'CristianK'
        })

    }, [img_profile, name])

    React.useEffect(() => {
  
        if (!window.localStorage.hasOwnProperty("logged")) {
          setIsLogged(false);
          navigate('/');
        } else {
          const logged = (JSON.parse(window.localStorage.getItem("logged"))).data;
    
          if (logged.isAuth) {
            setIsLogged(true);
          }
    
        } 
    
    }, []);

     return (
        <>
         {
             isLogged &&
            <main className="_container_profile_actions">
                <div className="_container_profile_img _img_circle">
                        <img src="/assets/icon/profile.svg" alt='profile' />
                    
                </div>
                <h1 className='_name_profile'>{username}</h1>
                <FormProfile />
                <FooterLogin />
            </main>
         }
        </>
     )

};


export default ProfileActions;