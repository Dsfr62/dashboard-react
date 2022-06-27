import React from "react";
import NavOptionsMd from "..";
import OptionList from "../optionList";
import WindowSize from "../../../windowSize";
import NavOptions from "../../navOptions";

const settingsOptionsList = [
    {
        text: "Help",
        link: "/",
    }
    ,    
    {
        text: "Lang",
        link: "/",
    },
    {
        text: "Report",
        link: "/",
    }
];


const SettingsOptions = () => {
    if (WindowSize() <= 768){
        return (
            <NavOptionsMd title="Settings"><OptionList options={settingsOptionsList}/></NavOptionsMd>
        );
    } else {
        return (
            <NavOptions title="Settings"><OptionList options={settingsOptionsList}/></NavOptions>
        );
    };
};


export default SettingsOptions;