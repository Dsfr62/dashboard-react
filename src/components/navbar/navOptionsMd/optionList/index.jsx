import React from "react";
import { CgCloseO } from 'react-icons/cg';

const OptionList = ({options}) => {
    return (
        <div>
            <CgCloseO size={15} className="mb-1.5"/>
            <div className="bg-customOrange rounded-lg">  
                <ul className="text-black font-semibold">
                    {options.map(option => 
                        <li className="p-2 border-b border-black hover:bg-customGreen hover:rounded-sm ease-linear transition-all"><a href={option.link}>{option.text}</a></li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default OptionList;