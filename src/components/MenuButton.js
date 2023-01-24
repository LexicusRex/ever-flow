import "../assets/styles/MenuButton.css";
import { useState } from "react";
import MenuBar from "./MenuBar";

function MenuButton() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleMenuToggle = () => {
        setToggleMenu((toggleMenu) => !toggleMenu);
    };

    return (
        <div>
            <button
                className={`hamburger ${toggleMenu && "is-active"}`}
                onClick={handleMenuToggle}
            >
                <div className="bar"></div>
            </button>

            <MenuBar />
        </div>
    );
}
export default MenuButton;
