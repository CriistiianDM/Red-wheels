//import libs
import React from 'react';
import FormProfile from './FormProfile';
import './profile.css'

//create a component
const ProfileActions = ({
    img_profile,
    name,
}) => {


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

     return (
        <>
           <main className="_container_profile_actions">
               <div className="_container_profile_img _img_circle">
                    <img src="/assets/icon/profile.svg" alt='profile' />
                   
               </div>
               <h1 className='_name_profile'>{data.name}</h1>
               <FormProfile />
           </main>
        </>
     )

};


export default ProfileActions;