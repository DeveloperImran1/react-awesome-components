import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu} from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";


const NavBar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/products', name: 'Products' },
        { id: 5, path: '/contact', name: 'Contact' }
    ];

    const [open, setOpen] = useState(false);

    return (
        <nav>

            <div onClick={()=> setOpen(!open)} className="md:hidden text-3xl p-3 bg-orange-500">
                {
                    open ? <IoIosCloseCircle></IoIosCloseCircle> :  <IoMenu></IoMenu>
                }
               
            </div>

            <ul className={`md:flex pl-[30px] bg-orange-500 absolute md:static duration-1000  ${open ? 'top-11' : '-top-60 '}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;