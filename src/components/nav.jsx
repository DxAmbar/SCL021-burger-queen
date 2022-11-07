import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Welcome</Link>
                </li>
                <li>
                    <Link to="/Orders">Orders</Link>
                </li>
                <li>
                    <Link to="/Kitchen">Kitchen</Link>
                </li>
                <li>
                    <Link to="/Neworder">NewOrder</Link>
                </li>
                <li>
                    <Link to="/Chooseorder">ChooseOrder</Link>
                </li>
                <li>
                    <Link to="/Breakfast">Breakfast</Link>
                </li>
                <li>
                    <Link to="/Food">Food</Link>
                </li>
            </ul>
        </>
    );
};