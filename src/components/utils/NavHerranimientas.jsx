//import librerias
import React from 'react';


const UTILS = [
    {
        img: '/assets/herramientas/1.svg',
        title: 'DIAGNOSTICO'
    },
    {
        img: '/assets/herramientas/2.svg',
        title: 'MOTOR'
    },
    {
        img: '/assets/herramientas/3.svg',
        title: 'LIQUIDOS'
    },
    {
        img: '/assets/herramientas/4.svg',
        title: 'LLANTAS'
    },
    {
        img: '/assets/herramientas/5.svg',
        title: 'TRANSMISION'
    },
    {
        img: '/assets/herramientas/6.svg',
        title: 'BATERIAS'
    }
]

const NavHerranimientas = () => {

    //mostrando habilidad :3, pero a que costo :(
    return (
        <>
            <section className="_container_herramientas">
                <div className='_sub_container_hrr'>
                    {
                        UTILS.map((item, index) => {
                            
                            return (
                                <div className="_card_herramientas" key={index}>
                                    <div className="_card_herramientas__img">
                                        <img src={item.img} alt="img" />
                                    </div>
                                    <h1>{item.title}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )

}

export default NavHerranimientas;