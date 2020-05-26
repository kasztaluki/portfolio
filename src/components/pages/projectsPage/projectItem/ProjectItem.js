import React from "react";
import PropTypes from "prop-types";
import "../../../../styles/pages/ProjectItem/ProjectItem.scss";

const ProjectItem = ({ name, image, codeLink, releaseLink, description, tech }) => (
   <div className="projectItem">
     <h1>{name}</h1>
     <div>
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
     <div>
        <p>{description}</p>
        <p><strong>{tech}</strong></p>
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