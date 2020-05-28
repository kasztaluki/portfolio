import React from "react";
import ProjectItem from "./projectItem/ProjectItem";
import { projectsList } from "../../../data/projectsList";

const ProjectsPage = () =>
    (<>
    <h1 className="page__title">Projekty komercyjne</h1>
    <div className="projectPage__elements">
      {projectsList.map(item => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProjectItem key={item.name} {...item}/>
        ))}
    </div>
    <h1 className="page__title">Projekty i gry własne</h1>
    <div className="projectPage__elements">
      {projectsList.map(item => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProjectItem key={item.name} {...item}/>
        ))}
    </div>
    </>
  );

export default ProjectsPage;
