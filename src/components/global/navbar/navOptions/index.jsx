import React, { useState } from "react";

const NavOptions = ({title, children}) => {
    const [showOptions, setOptions] = useState(false);

    const handleOptions = () => {
        setOptions(!showOptions)
    };

    return (
        <div className="transition ease-linear delay-500 duration-700" onMouseEnter={handleOptions} onMouseLeave={handleOptions}>
            <a className="pr-4">{title}</a>
            <div className="md:absolute">
                {!showOptions ? <></> : children}
            </div>
        </div>
    );
};

export default NavOptions;