import React from "react";
import NavOptions from "..";
import OptionList from "../optionList";

const dashboardOptionsList = [
    {
        text: "Google",
        link: "https://www.google.com.br/",
    }
    ,    
    {
        text: "Teste",
        link: "/",
    }
];


const DashboardOptions = () => {
    return (
        <NavOptions title="Dashboard"><OptionList options={dashboardOptionsList}/></NavOptions>
    );
};

export default DashboardOptions;