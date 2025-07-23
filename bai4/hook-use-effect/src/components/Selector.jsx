import { useState, useEffect } from "react";

function Selector(){
    let [selected, setSelected] = useState("0");
    let [valueSelected, setValueSelected] = useState("");

    const choice = (e) => {
        setSelected(e.target.value);
    }

    useEffect(() => {
        switch(selected) {
            case "0":
                setValueSelected("Java");
                break;
            case "1":
                setValueSelected("Angular");
                break;
            case "2":
                setValueSelected("JavaScript");
                break;
            case "3":
                setValueSelected("React");
                break;
            default:
        }
    }, [selected]);

    return(
        <div>
            Khoa hoc:
            <select onChange={choice}>
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">JavaScript</option>
                <option value="3">React</option>
            </select>
            <h2>you selected: {valueSelected}</h2>
        </div>
    )
}

export default Selector;