//import libraries
import React from 'react';

/** 
  * @returns Component ViewProduct
*/
const Characteristics = ({
    data_product_selected
}) => {

    //useState
    const [characteristics, setCharacteristics] = React.useState([]);
    const data_init = ['','',''];
    let lim_sup = 0;
    let lim_inf = 0;

    //useEffect
    React.useEffect(() => {

      setCharacteristics((data_product_selected? data_product_selected : []));

    }, [])

    //todo: Tiene un costo computacional de O(3n) 
    //render
    return (
        <>
          <div className='_container_characteristics_view'>
              {
                 data_init.map((e,index__) => {
                  lim_sup += 5;
                  lim_inf += index__ === 0 ? 0 : 5;
                    return (
                        <ol key={index__}>
                            {
                                characteristics.map((item, index) => {

                                  if (index < lim_sup && index >= lim_inf) {
                                      return (
                                        <li key={index}>
                                            <span>{item}</span>
                                        </li>
                                      )
                                  }

                                })    
                            }
                        </ol>
                    )
                   
                 })
              }
          </div>
        </>
    )

};


export default Characteristics;