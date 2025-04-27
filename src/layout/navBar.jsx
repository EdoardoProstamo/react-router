import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <div>
                    <ul>
                        <li><NavLink to='/'>HOMEPAGE</NavLink></li>
                        <li><NavLink to='/posts'>LISTA POST</NavLink></li>
                        <li><NavLink to='/about'>Chi siamo</NavLink></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default NavBar;