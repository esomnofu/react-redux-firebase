import React from 'react';
import moment from 'moment'


const ProjectSummary = ({details}) => {
    return ( 
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{details.title}</span>
                <p> Posted By {details.authorFirstName} {details.authorLastName} </p>
                <p> {details.content} </p>
                <p> { moment(details.createdAt.toDate()).calendar() }</p>
            </div>
        </div>
     );
}
 
export default ProjectSummary;