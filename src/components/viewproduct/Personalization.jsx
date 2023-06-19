//import liraries
import React from 'react';


//pintar un circulo de color
const Pint_circle_color = ({ data = [] }) => {

    return (
        <>
         {
            data.map((item, index) => (
                <div key={index} style={{ background: `${item}`}} className='_circle_color' />
              ))
         }
        </>
    )

}


/**
 * 
 * @returns Personalization
 */
const Personalization = ({
    data_color_ext,
    data_color_int
}) => {
    
    //useState
    const [data_color, setDataColor] = React.useState({
        data_color_ext: [],
        data_color_int: []
    });

    //useEffect
    React.useEffect(() => {

        setDataColor({
            data_color_ext: data_color_ext ? data_color_ext : [],
            data_color_int: data_color_int ? data_color_int : []
        });

    }, [data_color_int])

    return (
        <>
            <div className='_container_personalization_view'>
                <div className='_pinture_ext'>
                    <h2>PINTURA EXTERIOR</h2>
                    <div className='_container_color'>
                        <Pint_circle_color data={data_color.data_color_ext} />
                    </div>
                </div>
                <div className='_pinture_int'>
                    <h2>TAPICERIA EXTERIOR </h2>
                    <div className='_container_color'>
                        <Pint_circle_color data={data_color.data_color_int} />
                    </div>
                </div>
            </div>
        </>
    )
    
};



export default Personalization;