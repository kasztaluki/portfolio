import React from "react";
import ProjectItem from "./projectItem/ProjectItem";
import { projectsList } from "../../../data/projectsList";

const ProjectsPage = () => (
    <div className="projectPage__elements">
      {projectsList.map(item => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProjectItem key={item.name} {...item}/>
        ))}
    </div>
  );

export default ProjectsPage;
