//import libraries
import React from "react";
import "./filter.css";
import arrowDonw from "/assets/icon/arrowDonw.svg";
import { replacements } from "../../services/replacement";
import json from "./data.json";

const FilterSpareParts = ({ setDataSelect, target, setTarget }) => {
    const getReplacements = async () => {
        try {
            const replacementList = await replacements();
            setDataSelect(replacementList.data);
        } catch (error) {
            throw new Error(error);
        }
    };

    const handleSelect = (e) => {
        let value = e.target.value;
        setDataSelect(json[value]);
        setTarget(value === 1 ? "/diagnostico-carros" : "/diagnostico-motos");
    };

    React.useEffect(() => {
        getReplacements();
    }, [target]);

    return (
        <>
            <section className="container-filter">
                <div className="container-filter__title">
                    <h1> ORDENAR POR </h1>
                    <div>
                        <select onChange={handleSelect} defaultValue={"0"}>
                            <option value="1">Carros</option>
                            <option value="2">Motos</option>
                        </select>
                        <img className="_down_img" src={arrowDonw} alt="down" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default FilterSpareParts;
