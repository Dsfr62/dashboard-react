import React from "react";

const Card = (props) => {
    return (
        <div className="bg-earthRose ring-2 ring-earthNesquik w-full h-80 shadow-xl rounded-lg p-2 hover:bg-earthBanana hover:text-earthChoco text-white hover:scale-105 ease-linear transition-all">
            <p className="font-bold text-xl">{props.title}</p>
            <p className="font-semibold text-sm">{props.subtitle}</p>
            <br/>
            <div className="grid justify-items-center">
                <p>{props.content}</p>
            </div>
        </div>
    );
};

export default Card;