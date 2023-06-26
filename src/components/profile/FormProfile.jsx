//import libs
import React from 'react';


//Here is the component
const FormProfile = ({
    first_content,
    second_content,
}) => {

    const [ data, setData ] = React.useState({
        first_content: [],
        second_content: []
    })


    React.useEffect(() => {
        setData({
            first_content: first_content? first_content : [],
            second_content: second_content? second_content : []
        })
    }, [first_content, second_content])

    return (
        <>
            <main className="_container_form_profile">
                <div className="_container_form_profile__item">
                    <form>
                        <div className="_container_form_inpust">

                                <div className="_container_form_inpust__item">

                                    <h1 htmlFor="name">Datos Personales</h1>
                                    <div className="_all_input">
                                        <label htmlFor="name">Marca de vehiculo</label>
                                        <input 
                                            placeholder="Tesla model 3" 
                                            type="text" 
                                            name="marca" 
                                            id="marca" />
                                        <label htmlFor="name">Matricula de vehiculo</label>
                                        <input 
                                            placeholder="IRO110"
                                            type="text" 
                                            name="_matricula" 
                                            id="_matricula" />
                                        <label htmlFor="name">Identificasion</label>
                                        <input 
                                            placeholder="Identificasion"
                                            type="text" 
                                            name="_matricula" 
                                            id="_matricula" />
                                    </div>

                                    <h1 htmlFor="name">Fecha y hora</h1>
                                    <div className="_all_input">
                                        <input 
                                                placeholder="Fecha"
                                                type="date"
                                                name="date"
                                                id="date" />
                                    </div>

                                </div>

                                <div className="_container_form_inpust__item">
                                    
                                    <h1 htmlFor="name">Datos del vehiculo</h1>
                                        <div className="_all_input">
                                            <label htmlFor="name">Diagnostico automotriz</label>
                                            <input
                                                placeholder="$49.99"
                                                type="text"
                                                name="automotriz"
                                                id="_automotriz" />
                                            <label htmlFor="name">Diagnostico automotriz</label>
                                            <input
                                                placeholder="$49.99"
                                                type="text"
                                                name="automotriz"
                                                id="_automotriz" />
                                            <label htmlFor="name">IVA</label>
                                            <input
                                                placeholder="19% x MONTO TOTAL"
                                                type="text"
                                                name="automotriz"
                                                id="_automotriz" />
                                            <p>
                                                <span>Total:</span>
                                                <span>$$$$$$</span>
                                            </p>
                                        </div>
                                </div>

                        </div>
                    </form>
                </div>
            </main> 
        </>
    )

};



export default FormProfile;