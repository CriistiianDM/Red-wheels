//import libraries
import React from "react";
import './filter.css';
import arrowDonw from '/assets/icon/arrowDonw.svg';
import json from './data.json'


const FilterSpareParts = ({
    setDataSelect,
    setTarget
}) => {

    const handleSelect = (e) => {
        let value = e.target.value;
        setDataSelect(json[value])
        setTarget(value === 0? '/diagnostico-carros' : '/diagnostico-motos')
    }

    React.useEffect( () => {
        setDataSelect(json[0])
        setTarget('/diagnostico-carros')
    }, [])

    return (
        <>
            <section className="container-filter">
                <div className="container-filter__title">
                     <h1> ORDENAR POR </h1>
                     <div>
                        <select onChange={handleSelect} defaultValue={"0"}>
                            <option value="0">Carros</option>
                            <option value="1">Motos</option>
                        </select>
                        <img className='_down_img' src={arrowDonw} alt="down" />
                     </div>
                </div>
            </section>
        </>
    )

}


export default FilterSpareParts;