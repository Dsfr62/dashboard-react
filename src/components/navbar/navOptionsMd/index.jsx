import React, { useState } from "react";

const NavOptions = ({title, children}) => {
    const [showOptions, setOptions] = useState(false);

    const handleOptions = () => {
        setOptions(!showOptions)
    };

    return (
        <div className="transition ease-linear delay-500 duration-700" onClick={handleOptions}>
            {!showOptions ? <a>{title}</a> : children}
        </div>
    );
};

export default NavOptions;