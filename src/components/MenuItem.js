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
                itemName === focusedItem && "bg-focus-accent"
            } ${
                itemName !== focusedItem && "hover:bg-mild-accent"
            } mb-[12px] w-full cursor-pointer rounded-[1rem]`}
        >
            <p
                className="ml-[45px] mb-0 align-middle text-[1.8rem] leading-[2.4rem] "
                onClick={useCallback(
                    () =>
                        navigate(`/${itemName.toLowerCase()}`, {
                            replace: true,
                        }),
                    [navigate]
                )}
            >
                {itemName}
            </p>
        </a>
    );
}
export default MenuItem;
