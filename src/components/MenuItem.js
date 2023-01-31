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
        <div
            className={`py-[14px] ${
                itemName === focusedItem && "bg-focus-accent"
            } ${
                itemName !== focusedItem && "hover:bg-mild-accent"
            } mb-[12px] w-full cursor-pointer rounded-[1rem]`}
            onClick={() => navigate(`/${itemName.toLowerCase()}`)}
        >
            <p className="ml-[45px] mb-0 align-middle text-[1.8rem] leading-[2.4rem] ">
                {itemName}
            </p>
        </div>
    );
}
export default MenuItem;
