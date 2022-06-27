import React, { useState } from "react";
import { CgMenuRightAlt, CgCloseO } from 'react-icons/cg';
import DashboardOptions from "./navOptionsMd/dashboardOptions";
import ProfileOptions from "./navOptionsMd/profileOptions";
import ProjectsOptions from "./navOptionsMd/projectsOptions";
import SettingsOptions from './navOptionsMd/settingsOptions';

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    };

    return (
        <div className="flex justify-between items-center shadow-lg top-0 left-0 text-white bg-earthRose w-full h-20 mx-auto px-4 border-b-2 border-earthNesquik">
            <a className="text-3xl font-bold w-full text-white">Logo</a>
            <ul className="hidden md:flex text-white font-semibold">
                <li className="p-4"><DashboardOptions /></li>
                <li className="p-4"><ProjectsOptions /></li>
                <li className="p-4"><ProfileOptions /></li>
                <li className="p-4"><SettingsOptions /></li>
            </ul>

                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <CgCloseO size={22} className="text-earthLatte" /> : <CgMenuRightAlt size={22} className="text-earthLatte"/>}
                </div>

                <div className={!nav ? "fixed left-0 top-1 w-[60%] h-full border-r border-r-customLatte bg-earthRose ease-in duration-500" : "ease-in duration-500 fixed left-[-100%]"}>
                    <a className="w-full text-3xl font-bold text-white m-5">Logo</a>
                    <ul className="p-4 text-white font-semibold">
                        <li className="p-4 border-b border-earthLatte"><DashboardOptions /></li>
                        <li className="p-4 border-b border-earthLatte"><ProjectsOptions /></li>
                        <li className="p-4 border-b border-earthLatte"><ProfileOptions /></li>
                        <li className="p-4 border-b border-earthLatte"><SettingsOptions /></li>
                    </ul>
                </div>
        </div>
    );
};

export default Navbar;