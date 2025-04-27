import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <div>
                    <ul>
                        <li><NavLink to='/'>HOMEPAGE</NavLink></li>
                        <li><NavLink to='/posts/:id'>LISTA POST</NavLink></li>
                        <li><NavLink to='/about'>CHI SIAMO</NavLink></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default NavBar;