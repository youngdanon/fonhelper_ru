import React, {Component, useState} from 'react';
import BlockLog from "./blockLog";


export default function EventLine(props) {
    let event = props.props.event;
    let k2 = props.props.k2value;
    let [isOpened, setIsOpened] = useState(false)
    let [className, setClassName] = useState('closed')


    function handleClick() {
        setIsOpened(!isOpened)
        setClassName(!isOpened ? 'opened' : 'closed')
    }

    return (
        <div className={"shadow-sm rounded line row " + (k2 <= event.k2 ? 'k2-alert ' : "") + className}
             onClick={handleClick}>
            {/*{k2 <= event.k2 ? play : ""}*/}
            < div className={"col-md-12 col-lg-7 event-name level-" + event.level}>
                <h6>{event.name}</h6>
            </div>
            <div className="col-md-12 col-lg-5 counters">
                {event.counters.map(c => (
                    <div className="counter">
                        {c
                            ? <p><b>{c}</b></p>
                            : <p className="text-muted">{c}</p>}
                    </div>
                ))}
            </div>
            {isOpened
                ?
                    <BlockLog eventId={event.id} level={event.level}/>
                : ""}
        </div>

    )

}
