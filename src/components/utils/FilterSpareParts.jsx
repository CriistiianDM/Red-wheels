//import libraries
import React from "react";
import './filter.css';
import arrowDonw from '/assets/icon/arrowDonw.svg';

const FilterSpareParts = () => {

    return (
        <>
            <section className="container-filter">
                <div className="container-filter__title">
                     <h1> ORDENAR POR </h1>
                     <div>
                        <select defaultValue={"1"}>
                            <option value="1">Carros</option>
                            <option value="2">Motos</option>
                        </select>
                        <img className='_down_img' src={arrowDonw} alt="down" />
                     </div>
                </div>
            </section>
        </>
    )

}


export default FilterSpareParts;