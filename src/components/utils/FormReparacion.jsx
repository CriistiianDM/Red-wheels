//import libreries
import React from "react";


//otra noche sin dormir :(
const FormReparacion = ({
    handleClick,
    src_img
}) => {

    const handleClick_ = () => {
        handleClick? handleClick() : null;
    }

    return (
        <>
           <main className="_container_pop_rp">
                 <div onClick={handleClick_} className="_eventoClose" />
                <div className="_container_form_rp">
                    <form>
                        <div className="_container_img_">
                            <img src={src_img} alt="img" />
                        </div>
                        <div className="_container_form_inpust">

                            <div className="_container_form_inpust__item">

                                <h1 htmlFor="name">Datos del vehiculo</h1>
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
                        <div className="_actions">
                             <button type="submit">RESERVE SU CITA</button>
                        </div>
                    </form>
                </div>
           </main>
        </>
    )

}


export default FormReparacion;