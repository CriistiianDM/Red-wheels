//import librerias
import React from 'react';



const NavHerranimientas = ({
    data_,
    handleClick
}) => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setData(data_);
    }, [data_]);

    //mostrando habilidad :3, pero a que costo :(
    return (
        <>
            <section className="_container_herramientas">
                <div className='_sub_container_hrr'>
                    {
                        data.map((item, index) => {
                            
                            return (
                                <a 
                                   onClick={handleClick}  
                                   id={`btn-hr-all-${index}`} 
                                   className="_card_herramientas" 
                                   key={index}>

                                    <div className="_card_herramientas__img">
                                        <img src={item.img} alt="img" />
                                    </div>
                                    <h1>{item.title}</h1>

                                </a>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )

}

export default NavHerranimientas;