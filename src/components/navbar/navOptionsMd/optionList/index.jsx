import React from "react";

const OptionList = ({options}) => {
    return (
        <div className="bg-customOrange rounded-lg">
            <ul className="text-black font-semibold">
                {options.map(option => 
                    <li className="p-2 border-b border-black hover:bg-customGreen hover:rounded-sm ease-linear transition-all"><a href={option.link}>{option.text}</a></li>
                )}
            </ul>
        </div>
    );
};

export default OptionList;