//import libraries
import React, { useState } from "react";
import "./filter.css";
import arrowDonw from "/assets/icon/arrowDonw.svg";
import { replacements } from "../../services/replacement";

const FilterSpareParts = ({ setDataSelect, setTarget }) => {
    const [vehicleType, setvehicleType] = useState(1);

    const getReplacements = async () => {
        try {
            const replacementList = await replacements({ id: vehicleType });
            setDataSelect(replacementList.data);
        } catch (error) {
            throw new Error(error);
        }
    };

    const handleSelect = (e) => {
        setvehicleType(e.target.value);
        setTarget(vehicleType === 1 ? "/diagnostico-carros" : "/diagnostico-motos");
    };

    React.useEffect(() => {
        setDataSelect([]);
        getReplacements();
    }, [vehicleType]);

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
