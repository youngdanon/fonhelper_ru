import React, {useContext, useState} from 'react';
import Context from "../../../context";


export default function BlocksFilters() {
    const {countersFilterUpdate, repeatsFilterUpdate} = useContext(Context)
    let [k1value, setK1value] = useState(0)
    let [k2value, setK2value] = useState(1)

    function handleClick(k1value, k2value) {
        countersFilterUpdate(k1value)
        repeatsFilterUpdate(k2value)
    }

    return (
        <div className="blocks-filters row">
            <div className="filter-item col-12 col-md-5 col-lg-5 row">
                <div className="description col-7 col-md-12 col-lg-7">Мин. кол-во блокировок:</div>
                <div className="value col-5 col-md-12 col-lg-5">
                    <input type="number" value={k1value} onChange={e => setK1value(e.target.value)}/>
                </div>
            </div>
            <div className="filter-item col-12 col-md-5 col-lg-5 row">
                <div className="description col-7 col-md-12 col-lg-7">Кол-во котир. подряд:</div>
                <div className="value col-5 col-md-12 col-lg-5">
                    <input type="number" value={k2value} onChange={e => setK2value(e.target.value)}/>
                </div>
            </div>
            <div className="filter-item submit-block col-12 col-md-2">
                <button className='btn btn-outline-success' type="button" onClick={() => handleClick(k1value, k2value)}>
                    Применить
                </button>
            </div>
        </div>
    )
}