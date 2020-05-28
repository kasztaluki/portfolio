import React from "react";
import PropTypes from "prop-types";
import "../../../../styles/pages/ProjectItem/ProjectItem.scss";

const ProjectItem = ({ name, image, codeLink, releaseLink, description, tech }) => (
   <div className="project__item">
      <h1>{name}</h1>
      <div className="project__description">
         <div >
            <img  src={image} 
                  className="projectItem__image"
                  alt={name} sizes="200x200"/>
            <div>
               <a  href={codeLink} 
                  className="projectItem__codeLink" 
                  target="_blank"
                  rel="noopener noreferrer">Kod</a>
               <a  href={releaseLink} 
                  className="projectItem__releaseLink" 
                  target="_blank"
                  rel="noopener noreferrer">Projekt</a>
            </div>
         </div>
            <p>O projekcie:<br />{description}</p>
            <p><strong>Tech Stack:<br />{tech}</strong></p>
      </div>
   </div>
);

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  releaseLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
};

export default ProjectItem;