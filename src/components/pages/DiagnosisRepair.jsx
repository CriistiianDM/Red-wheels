//import librearies
import React from 'react';
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import Footer from '../footer/footer';
import NavHerranimientas from '../utils/NavHerranimientas';
import CardViewVh from '../utils/CardViewVh';

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


const DiagnosisRepair = () => {

    const [ data_select, setDataSelect ] = React.useState([]);

    const handleClick = (e) => {
        e.preventDefault();

        //obtener la clase del elemento que se le dio click
        const class_name = e.currentTarget.className;

        const object_ = {
            '_card_herramientas': '_container_hr_vh__item',
            '_container_hr_vh__item': '_card_herramientas'
        }

        //sacar todos los elementos que tengan la clase 
        const elements_1 = document.querySelectorAll(`.${class_name}`);
        const elements_2 = document.querySelectorAll(`.${object_[class_name]}`);

        elements_1.forEach((element, index) => {
            elements_2[index].classList.remove('_active_btn');
            element.classList.remove('_active_btn');
        });


        const elements_3 = document.querySelectorAll(`#${e.currentTarget.id}`);
        elements_3.forEach((element) => {
                element.classList.add('_active_btn');
        });

    }

    return (
        <>
          <Header />
          <Navbar />
          <NavHerranimientas handleClick={handleClick} data_={UTILS} />
          <CardViewVh handleClick={handleClick} data_vehicles={UTILS}  />
          <Footer  />
        </>
    )

}

export default DiagnosisRepair;