import React from "react";
import "./MedicineTypeDropdown.css";

export default class MedicineTypeDropdown extends React.Component{
    render() {
        return(
            <select className={"dropdown_list"}>
                <option value="PILL">PILL</option>
                <option value="POTION">POTION</option>
                <option value="OINTMENT">OINTMENT</option>
                <option value="TINCTURE">TINCTURE</option>
                <option value="POWDER">POWDER</option>
            </select>
        );
    }
}