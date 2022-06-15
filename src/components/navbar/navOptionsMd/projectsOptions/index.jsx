import React from "react";
import NavOptionsMd from "..";
import OptionList from "../optionList";
import WindowSize from "../../../global/windowSize";
import NavOptions from "../../navOptions";

const projectsOptionsList = [
    {
        text: "Main",
        link: "/",
    }
    ,    
    {
        text: "Index",
        link: "/",
    }
];


const ProjectsOptions = () => {
    if (WindowSize() <= 768){
        return (
            <NavOptionsMd title="Projects"><OptionList options={projectsOptionsList}/></NavOptionsMd>
        );
    } else {
        return (
            <NavOptions title="Projects"><OptionList options={projectsOptionsList}/></NavOptions>
        );
    };
};

export default ProjectsOptions;