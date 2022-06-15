import React from "react";
import NavOptionsMd from "..";
import OptionList from "../optionList";
import WindowSize from "../../../global/windowSize";
import NavOptions from "../../navOptions";

const profileOptionsList = [
    {
        text: "Account",
        link: "/",
    }
    ,    
    {
        text: "Groups",
        link: "/",
    },
    {
        text: "Leave",
        link: "/",
    }
];


const ProfileOptions = () => {
    if (WindowSize() <= 768){
        return (
            <NavOptionsMd title="Profile"><OptionList options={profileOptionsList}/></NavOptionsMd>
        );
    } else {
        return (
            <NavOptions title="Profile"><OptionList options={profileOptionsList}/></NavOptions>
        );
    };

};

export default ProfileOptions;