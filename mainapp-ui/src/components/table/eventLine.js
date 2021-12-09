import React, {Component, useState} from 'react';
import BlockLog from "./blockLog";
import MultiPlayer from "../multiplayer";
import useSound from "use-sound";


// class EventLine extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {open: false}
//         this.play = useSound('../../../../static/media/alert.mp3');
//     }
//
//     toggleOpen() {
//         this.setState({open: !this.state.open})
//     }
//
//     render() {
//         let className = this.state.open ? 'opened' : 'closed';
//         let event = this.props.props.event;
//         let k2 = this.props.props.k2value;
//         return (
//             <div className={"line row " + (k2 <= event.k2 ? 'k2-alert' : "")} key={event.id}
//                  onClick={this.toggleOpen.bind(this)}>
//                 {k2 <= event.k2 ? this.play : ""}
//                 < div className={"col-md-12 col-lg-7 event-name level-" + event.level}>
//                     <h6>{event.name}</h6>
//                 </div>
//                 <div className="col-md-12 col-lg-5 counters">
//                     {event.counters.map(c => (
//                         <div className="counter">
//                             {c
//                                 ? <p><b>{c}</b></p>
//                                 : <p className="text-muted">{c}</p>}
//                         </div>
//                     ))}
//                 </div>
//                 {this.state.open
//                     ? <div className={className}>
//                         <BlockLog eventId={event.id} level={event.level}/>
//                     </div>
//                     : ""}
//             </div>
//
//         )
//     }
// }
//
// export default EventLine

export default function EventLine(props) {
    let event = props.props.event;
    let k2 = props.props.k2value;
    let [isOpened, setIsOpened] = useState(false)
    let [className, setClassName] = useState('closed')

    // let [play] = useSound('/static/media/alert.mp3')

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
