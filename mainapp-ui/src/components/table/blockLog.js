import React, {useEffect, useState} from "react";
import axios from "axios";

export default function BlockLog(props) {
    let [blockLogs, setBlockLogs] = useState([])
    let eventId = props.eventId;
    useEffect(() => {
        axios({
            method: "get",
            url: '/api/event_blocks_info/',
            params: {'event_id': eventId}
        }).then(response => {
            setBlockLogs(response.data);
        })
        const interval = setInterval(() => {
            axios({
                method: "get",
                url: '/api/event_blocks_info/',
                params: {'event_id': eventId}
            }).then(response => {
                setBlockLogs(response.data);
            })
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="blockLog-table">
            {blockLogs.map(blockLog  => (
                <div className="row log">
                    <div className="log-item score col-4 col-lg-3 text-muted">{blockLog.comment}</div>
                    <div className="log-item score col-2 col-lg-1">{blockLog.score}</div>
                    <div className="log-item time col-2 col-lg-1">{blockLog.time}</div>
                    {(blockLog.param)
                        ? <div className="log-item param col-2 col-lg-2"> <b>{blockLog.factor}</b> ({blockLog.param})</div>
                        : <div className="log-item factor col-2 col-lg-2"><b>{blockLog.factor}</b></div>
                    }
                    <div className="log-item value col-2 col-lg-1">{blockLog.value}</div>
                </div>
            ))}
            {!blockLogs.length ? <span className="shadow-sm rounded warning alert-warning">Не найдено блокировок по данному событию</span> : ""}
        </div>
    )

}