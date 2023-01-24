import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function MenuItem({ itemType, itemName, focusedItem }) {
    const itemIcons = {
        home: "",
        courses: "",
        projects: "",
        meetings: "",
        schedule: "",
    };
    const navigate = useNavigate();
    return (
        <a
            className={`py-[14px] ${
                itemName === focusedItem && "bg-[#F0668066]"
            } ${
                itemName !== focusedItem && "hover:bg-[#F0668033]"
            } w-full rounded-[1rem] mb-[12px] cursor-pointer`}>
            <p
                className="ml-[45px] mb-0 align-middle leading-[2.4rem] text-[1.8rem] "
                onClick={useCallback(
                    () =>
                        navigate(`/${itemName.toLowerCase()}`, {
                            replace: true,
                        }),
                    [navigate]
                )}>
                {itemName}
            </p>
        </a>
    );
}
export default MenuItem;
