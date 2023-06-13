//import libraries
import React from "react";


const CardViewVh = ({
    data_vehicles,
    src_img
}) => {

    const [ img_ , setImg ] = React.useState('/assets/herramientas/car_pd.svg')
    const [ data_ , setData ] = React.useState([])

    React.useEffect(() => {
        src_img !== "" && 
        src_img !== undefined && 
        src_img !== null && 
        setImg(src_img) 
    }, [src_img])


    React.useEffect(() => {
        data_vehicles !== [] &&
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
                                <a className="_container_hr_vh__item" key={index}>
                                      <img src={item.img}  alt="_img" />
                                </a>
                            )
                        })
                    }
                </div>
              </div>
              <div className="_actions">
                    <a>DETALLES</a>
              </div>
           </section>
        </>
    )

}

export default CardViewVh;