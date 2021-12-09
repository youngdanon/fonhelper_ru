import React from 'react';

export default function TableHeader(props) {

    let liveEvents = props.liveEvents
    const baseFactors = ['1', 'X', '2', '1X', 'X2', '12', "Ф1", "Ф2", 'ТБ', 'ТМ', 'F']

    return (
        <div className="shadow-lg rounded table-header">
            <div className="line row">
                <div className="col-md-12 col-lg-7 event-name"><h6>Событий найдено: {liveEvents.length}</h6>
                </div>
                <div className="col-md-12 col-lg-5 counters">
                    {baseFactors.map(factor => (
                        <div className="shadow-sm rounded-pill counter">{factor}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}