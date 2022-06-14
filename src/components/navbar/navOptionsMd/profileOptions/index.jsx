import React from "react";
import NavOptions from "..";
import OptionList from "../optionList";

const profileOptionsList = [
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


const ProfileOptions = () => {
    return (
        <NavOptions title="Profile"><OptionList options={profileOptionsList}/></NavOptions>
    );
};

export default ProfileOptions;