//import libraries
import React from "react";
import PopReparacion from "./PopReparacion";
import data_pop_reparacion from "./dataPopUp";

const CardViewVh = ({
    data_vehicles,
    src_img,
    handleClick,
    type
}) => {

    const [ img_ , setImg ] = React.useState('/assets/herramientas/car_pd.svg')
    const [ data_ , setData ] = React.useState([])
    const [ active_pop, setActivePop ] = React.useState(false);
    const [ img__ , setImg_ ] = React.useState('')
    const dataPopUp = data_pop_reparacion[type? type : 'car']

    const handleClickPop = () => {
        //sacar el src de la imagen del que tiene la clase active
        const src_img = document.querySelector('._container_hr_vh__item._active_btn')?.querySelector('img').src;
        setImg_(src_img);

        if ( src_img !== undefined && 
             src_img !== null && 
             src_img !== "") {
            setActivePop(!active_pop);
        }   

    }

    React.useEffect(() => {
        src_img !== "" && 
        src_img !== undefined && 
        src_img !== null && 
        setImg(src_img) 
    }, [src_img])


    React.useEffect(() => {
        data_vehicles !== undefined &&
        data_vehicles !== null &&
        setData(data_vehicles)
    }, [data_vehicles])

    return (
        <> 
           <section className="_container_hr_vh">
              <div className="_container_vh_all">
                <img src={img_} alt="img" />
                <div className="_absolute_conatiner_hr_all">
                    {
                        data_.map((item, index) => {
                            return (
                                <a className={`_container_hr_vh__item ${type === 'moto' ? '_vh__item_moto' : ''}`} 
                                   id={`btn-hr-all-${index}`} 
                                   onClick={handleClick}
                                   key={index}>
                                      <img src={item.img}  alt="_img" />
                                </a>
                            )
                        })
                    }
                </div>
              </div>
              <div className="_actions">
                    <a onClick={handleClickPop}>DETALLES</a>
                    {
                        active_pop &&
                        <PopReparacion 
                            changeClose={handleClickPop}
                            src_img={img__}
                            {...dataPopUp}
                        />
                    }
              </div>
           </section>
        </>
    )

}

export default CardViewVh;