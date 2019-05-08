import React from 'react';
import moment from 'moment'

const listStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '14px',
    padding: '10px',
    background: 'silver'
}

const dateStyle = {
    color: 'white'
}

const Notifications = ({notifications}) => {
    return ( 
            <div className="section">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">Notifications</span>
                            <ul className="notifications">
                                { notifications && notifications.map(notification => {
                                    return(
                                            <li key={notification.id} style={listStyle}> 
                                                    <span className="pink-text"> { notification.user } </span>
                                                    <span className="pink-text"> { notification.content } </span>
                                                    <div className="note-date" style={dateStyle}> { moment(notification.time.toDate()).fromNow() } </div>
                                            </li>
                                        )
                                }) }
                            </ul>
                        </div>
                    </div>
            </div>
     );
}
 
export default Notifications;