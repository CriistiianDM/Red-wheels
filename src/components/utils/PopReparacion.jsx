//import libraries
import React from "react";
import FormReparacion from "./FormReparacion";
import './popupstyles.css'


const PopReparacion = ({
    title,
    description,
    ulData,
    dataPrecios,
    titleReparacion,
    changeClose,
    src_img,
    handleEvent 
}) => {

    const [ data_ , setData ] = React.useState({
        title: '',
        description: '',
        ulData: [],
        dataPrecios: []
    })
    const [ active_pop, setActivePop ] = React.useState(false);

    const handleClick = () => {
        changeClose? changeClose() :  null;
        document.querySelector('body').classList.remove('_overflow-hidden');
    }

    const handleEventClick = (e) => {
        //handleEvent? handleEvent() : null;
        setActivePop(!active_pop);
        //changeClose? changeClose() :  null;
       
    }

    //Esto se hace que si en algun momento se cambia el estado de los props
    //se actualice el estado del componente
    //o si no hay datos se le asigna un valor por defecto
    React.useEffect(() => {

        setData({
            title: title? title : 'N/A',
            description: description? description : 'N/A',
            ulData: ulData? ulData : [],
            dataPrecios: dataPrecios? dataPrecios : []
        })

    }, [title, description, ulData, dataPrecios])

    React.useEffect(() => {
        document.querySelector('body').classList.add('_overflow-hidden');
    }, [])

    //render
    return (
        <>
            {
                active_pop && 
                <FormReparacion 
                    src_img={src_img}
                    handleClick={handleClick} />
                || !active_pop && 
                <main className="_container_pop_rp">
                    <div onClick={handleClick} className="_eventoClose" />
                    <div className="_container_rp_content">
                        <section className="_content_text_rp">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <ol>
                                {
                                    data_.ulData.map((item, index) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })
                                }
                            </ol>
                            <div className="_actions">
                                <a onClick={handleEventClick}>RESERVE SU CITA</a>
                            </div>
                        </section>
                        <section className="_container_precios_rp">
                            <h1>{titleReparacion}</h1>
                            <div className="_container_precios_rp__item">
                                {
                                    data_.dataPrecios.map( (item, index) => {
                                        return (
                                            <div className="_item" key={index}>
                                                <span>{item.text}</span>
                                                <span>{item.price}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </div>
                </main>
            }
        </>
    )

};

export default PopReparacion;