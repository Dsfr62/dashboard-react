import React from "react";
import { CgCloseO } from 'react-icons/cg';

const OptionList = ({options}) => {
    return (
        <div>
            <CgCloseO size={15} className="md:hidden mb-1.5"/>
            <div className="bg-customOrange rounded-md">  
                <ul className="text-black font-semibold">
                    {options.map(option => 
                        <li className="p-2 w-auto border-b md:border-none border-black hover:bg-customLightOrange hover:rounded-md hover:font-bold ease-linear transition-all"><a href={option.link}>{option.text}</a></li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default OptionList;