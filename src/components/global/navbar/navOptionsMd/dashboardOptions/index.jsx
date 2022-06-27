import React from "react";
import NavOptionsMd from "..";
import OptionList from "../optionList";
import WindowSize from "../../../windowSize";
import NavOptions from "../../navOptions";

const dashboardOptionsList = [
    {
        text: "Index",
        link: "/dashboard",
    }
    ,    
    {
        text: "Graph",
        link: "/",
    }
];

const DashboardOptions = () => {
    if (WindowSize() <= 768){
        return (
            <NavOptionsMd title="Dashboard"><OptionList options={dashboardOptionsList}/></NavOptionsMd>
        );
    } else {
        return (
            <NavOptions title="Dashboard"><OptionList options={dashboardOptionsList}/></NavOptions>
        );
    };
};

export default DashboardOptions;