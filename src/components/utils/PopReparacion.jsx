//import libraries
import React from "react";


const PopReparacion = ({
    title,
    description,
    ulData,
    dataPrecios
}) => {

    const [ data_ , setData ] = React.useState({})

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

    }, [data_])

    //render
    return (
        <>
            <main className="_container_pop_rp">
                <div></div>
                <div className="_container_rp_content">
                    <section className="_content_text_rp">
                         <title>{title}</title>
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
                    </section>
                    <section className="_container_precios_rp">
                        <div className="_container_precios_rp__item">
                            {
                                data_.dataPrecios.map( (item, index) => {
                                    return (
                                        <div className="_item" key={index}>
                                            <p>{item.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
            </main>
        </>
    )

};

export default PopReparacion;