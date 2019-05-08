import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {

    var projectSummary = projects && projects.map(project => {
        return (
            <Link to={'/project/' + project.id}  key={project.id}>
                <ProjectSummary details={project}  />
            </Link>
        )
    })

    return ( 
            <div className="project-list section">
                {projectSummary}
            </div>
     );
}
 
export default ProjectList;