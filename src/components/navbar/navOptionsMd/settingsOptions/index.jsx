import React from "react";
import NavOptions from "..";
import OptionList from "../optionList";

const settingsOptionsList = [
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


const SettingsOptions = () => {
    return (
        <NavOptions title="Settings"><OptionList options={settingsOptionsList}/></NavOptions>
    );
};

export default SettingsOptions;