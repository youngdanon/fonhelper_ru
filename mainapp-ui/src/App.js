import React, {useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventTable from "./components/table/renderTable";
import axios from "axios";
import Context from "./context";
import LoginForm from "./components/loginpage";

function App() {
    let [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
    useEffect(() => {
        axios({
            method: "GET",
            url: '/api/is_auth/'
        }).then(response => {
            setIsUserAuthenticated(response.data.status)
        })
    },[])

    useEffect(() => {
        axios({
            method: "GET",
            url: '/api/is_auth/'
        }).then(response => {
            setIsUserAuthenticated(response.data.status)
        })
    },[isUserAuthenticated])

    function auth(value) {
        setIsUserAuthenticated(value)
    }

    return (
        <div className="col-md-12 col-lg-11 wrapper">
            <Context.Provider value={{auth}}>
            {isUserAuthenticated
            ? <EventTable/>
            : <LoginForm/>}
            </Context.Provider>
            {/*<iframe src="/static/media/silence.mp3" allow="autoplay" id="audio" style={{display: null}}/>*/}


        </div>
    );
}

export default App;
