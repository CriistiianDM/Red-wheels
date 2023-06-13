//import libraries
import React from "react";
import './filter.css';
import arrowDonw from '/assets/icon/arrowDonw.svg';
import json from './data.json'


const FilterSpareParts = ({
    setDataSelect
}) => {

    const handleSelect = (e) => {
        let value = e.target.value;
        setDataSelect(json[value])
    }

    React.useEffect( () => {
        setDataSelect(json[0])
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