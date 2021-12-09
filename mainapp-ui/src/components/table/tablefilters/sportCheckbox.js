import React, {useContext, useState} from 'react';
import Context from "../../../context";

export default function SportCheckbox(props) {
    const {unselectSport, selectSport} = useContext(Context)
    const sportId = props.sport.id
    const sportName = props.sport.name

    const [checked, setChecked] = useState(true);
    const handleChange = () => {
        setChecked(!checked);
        if (!checked) {
            selectSport(sportId)
        } else {
            unselectSport(sportId)
        }

    };
    return (
        <span className={"shadow-lg rounded selector " + (checked ? "selected" : "unselected")} onClick={handleChange} key={sportId}>
            {sportName}
        </span>
    )
}
