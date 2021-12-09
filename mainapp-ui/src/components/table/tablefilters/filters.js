import React, {useEffect, useState, useContext} from 'react';
import SportCheckbox from './sportCheckbox'
import BlocksFilters from "./blocksFilters";

export default function Filters(props) {
    const sportFilters = props.sportFilters
    return (
        <div className="filters">
            <BlocksFilters/>
            <div className="shadow-sm rounded sport-filters">
                {sportFilters.map(sportData => (
                    <SportCheckbox sport={sportData}/>
                ))}
            </div>
        </div>
    )
}