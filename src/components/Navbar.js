import img from "../theme/logo-removebg-preview.png";
import {Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {IconContext} from "react-icons";
import {FaPhoneAlt} from "react-icons/fa";

function NavbarHome(routes) {
    return (
        <Navbar className="justify-content-between px-5">
            <img src={img} className="logo_img d-md-none" alt="logo"/>
            <Nav className="gap-5">
                {routes.routeObj.map((route) => (
                    <Nav.Link
                        key={route.path}
                        as={NavLink}
                        to={route.path}
                        className={({isActive}) => (isActive ? 'active' : undefined)}
                        end
                    >
                        {route.name}
                    </Nav.Link>
                ))}
            </Nav>
            <IconContext.Provider value={{className: 'text-danger'}}>
                <Link to="/" className="text-decoration-none align-items-center d-flex"><FaPhoneAlt/><p
                    className="m-0 ps-2 text-danger">Schedule a call</p></Link>
            </IconContext.Provider>
        </Navbar>
    );
}

export default NavbarHome;