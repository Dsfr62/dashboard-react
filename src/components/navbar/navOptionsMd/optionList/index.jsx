import React from "react";
import { CgCloseO } from 'react-icons/cg';

const OptionList = ({options}) => {
    return (
        <div>
            <CgCloseO size={15} className="md:hidden mb-1.5 text-earthLatte"/>
            <div className="bg-earthLatte md:bg-earthChoco rounded-md">  
                <ul className="text-white font-semibold">
                    {options.map(option => 
                        <li className="p-2 w-auto border-b md:border-none border-earthChoco md:border-earthLatte border-rounded-md hover:bg-earthSalmon hover:rounded-md hover:font-bold hover:text-earthChoco ease-linear transition-all"><a href={option.link}>{option.text}</a></li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default OptionList;