import React, { useState } from "react";
import { CgMenuRightAlt, CgCloseO } from 'react-icons/cg';
import DashboardOptions from "./navOptionsMd/dashboardOptions";
import ProfileOptions from "./navOptionsMd/profileOptions";
import ProjectsOptions from "./navOptionsMd/projectsOptions";
import SettingsOptions from './navOptionsMd/settingsOptions'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    };

    return (
        <div className="flex justify-between items-center shadow-md fixed top-0 left-0 text-white bg-black w-full h-20 mx-auto px-4">
                <a className="text-3xl font-bold w-full text-customOrange">Logo</a>
                <ul className="hidden md:flex">
                    <li className="p-4">Dashboard</li>
                    <li className="p-4">Projects</li>
                    <li className="p-4">Profile</li>
                    <li className="p-4">Settings</li>
                </ul>

                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <CgCloseO size={22} /> : <CgMenuRightAlt size={22}/>}
                </div>

                <div className={!nav ? "fixed left-0 top-1 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in duration-500" : "ease-in duration-500 fixed left-[-100%]"}>
                    <a className="w-full text-3xl font-bold text-customOrange m-5">Logo</a>
                    <ul className="p-4">
                        <li className="p-4 border-b border-white"><DashboardOptions /></li>
                        <li className="p-4 border-b border-white"><ProjectsOptions /></li>
                        <li className="p-4 border-b border-white"><ProfileOptions /></li>
                        <li className="p-4 border-b border-white"><SettingsOptions /></li>
                    </ul>
                </div>
        </div>
    );
};

export default Navbar;