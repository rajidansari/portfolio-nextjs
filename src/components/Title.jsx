import React from "react";

const Title = ({title}) => {
    return (
        <div className="w-full h-8 padding-main border-bottom">
            <div className="h-full border-left border-right text-2xl font-semibold px-2">
                {title}
            </div>
        </div>
    );
};

export default Title;
