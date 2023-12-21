import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/planLogo.png'
import { FaBars} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { LuUser2 } from "react-icons/lu";
import { useState } from "react";
import './Header.css'
const Header = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <div className="navbar bg-base-100 relative">
            <div className="container mx-auto px-3">
                <div className="mr-auto">
                    <Link to={'/'}>
                        <img className="h-16" src={logo} alt="" />
                    </Link>
                </div>
                <div className=" flex justify-end">

                    <div className={`absolute md:relative bg-base-100 header top-full right-0 overflow-hidden ease-in-out duration-500 ${showNav ? 'h-0 opacity-0 top-48' : 'h-auto opacity-100'}`} id="navbar">

                        <ul className="menu md:menu-horizontal px-1">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/about'}>About</NavLink></li>
                            <li><NavLink to={'/beneficiary'}>Beneficiary</NavLink></li>
                            <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link className="p-2 text-2xl" to={'/login'}>
                            <LuUser2 />
                        </Link>
                    </div>
                    <div className="flex md:hidden items-center justify-end">
                        <button onClick={() => setShowNav(!showNav)} className="text-3xl">

                            {
                                showNav ? <FaBars></FaBars> : <ImCross />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;