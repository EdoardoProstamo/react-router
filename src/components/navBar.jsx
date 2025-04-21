import { Link, NavLink } from "react-router-dom";

const navBar = () => {

    <div>
        <ul>
            <li><NavLink to='/'>HOMEPAGE</NavLink></li>
            <li><NavLink to='/posts'>LISTA POST</NavLink></li>
            <li><NavLink to='/about'>Chi siamo</NavLink></li>
        </ul>
    </div>

    console.log("NavBar");
};

export default navBar;