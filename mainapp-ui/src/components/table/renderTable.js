import React, {useEffect, useState} from 'react';
import EventLine from "./eventLine";
import axios from "axios";
import TableHeader from "./tableHeader"
import Context from "../../context";
import Filters from "./tablefilters/filters";

export default function EventTable(props) {

    let [sportIds, setSportIds] = useState([])
    let [sportFilters, setSportFilters] = useState([])
    let [k1, setK1] = useState(0)
    let [k2, setK2] = useState(1)


    function unselectSport(sportId) {
        setSportIds(sportIds.filter(id => id !== sportId))
    }

    function selectSport(sportId) {
        setSportIds(sportIds.concat(sportId));
    }

    function countersFilterUpdate(value) {
        setK1(value)
    }

    function repeatsFilterUpdate(value) {
        setK2(value)
    }


    useEffect(() => {
        axios({
            method: "get",
            url: 'api/sports/'
        }).then(response => {
            setSportFilters(response.data)
            let buffer = []
            response.data.map(sportData => {
                buffer.push(sportData.id)
            })
            setSportIds(buffer)
        })
    }, [])


    let [liveEvents, setLiveEvents] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: '/api/live_events/',
            params: {'sports': sportIds.join(), 'k1': k1}
        }).then(response => {
            setLiveEvents(response.data);

        })
        const interval = setInterval(() => {
            axios({
                method: "get",
                url: '/api/live_events/',
                params: {'sports': sportIds.join(), 'k1': k1}
            }).then(response => {
                setLiveEvents(response.data);
            })
        }, 2500);
        return () => clearInterval(interval);
    }, [sportIds, k1]);


    return (

        <div className="events-table">
            <h1>Текущие события:</h1>
            <Context.Provider value={{unselectSport, selectSport, countersFilterUpdate, repeatsFilterUpdate}}>
                <Filters sportFilters={sportFilters}/>
            </Context.Provider>
            <TableHeader liveEvents={liveEvents.length}/>
            <div className="table-body">
                {liveEvents.map(event => (
                    <EventLine props={{'event': event, 'k2value': k2}} key={event.id}/>
                ))}
            </div>
        </div>
    )
}