import React from "react";
import NavOptions from "..";
import OptionList from "../optionList";

const projectsOptionsList = [
    {
        text: "Teste",
        link: "/",
    }
    ,    
    {
        text: "Teste",
        link: "/",
    }
];


const ProjectsOptions = () => {
    return (
        <NavOptions title="Projects"><OptionList options={projectsOptionsList}/></NavOptions>
    );
};

export default ProjectsOptions;