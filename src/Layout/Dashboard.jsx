import { NavLink, Outlet } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import Profile from "../components/Profile";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FiLogOut } from "react-icons/fi";


const Dashboard = () => {
    const {logOut} = useContext(AuthContext)
    console.log(logOut);
    const handleLogOut = () =>{
        logOut()
        .then(data => console.log(data))
        .catch(err=> console.log(err))
    }
    return (
        <div className="dash">
            <div className="container mx-auto ">
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}

                        <div className="lg:hidden bg-base-300 w-full px-3 py-2 flex items-center">
                            <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden text-3xl"><BiSolidDashboard /></label>

                            <p className="font-titleText text-3xl ml-3">Plan<span className="text-[#ABFC2F]">Pilot</span></p>
                        </div>

                        <div className="p-3 bg-[#fff2] min-h-full">
                            <Outlet></Outlet>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                        <div className="bg-slate-100 min-h-full" id="navbar">
                            <div>
                                <h3 className="text-2xl font-titleText px-4 pt-10 text-center">
                                    Plan<span className="text-[#ABFC2F]">Pilot</span>
                                </h3>
                                <hr />
                            <Profile></Profile>
                            </div>
                            <ul className="menu p-4 w-80 min-h-full  text-base-content">
                                {/* Sidebar content here */}
                                <li><NavLink to={'/dashboard/home'}>Create Task</NavLink></li>

                                <li><NavLink to={'/dashboard/todo'}>TO-DO list</NavLink></li>

                                <li><NavLink to={'/dashboard/task'}>All Task</NavLink></li>


                                <div className="divider">OR</div>
                                <li><NavLink to={'/'}>Home</NavLink></li>
                                <li>
                                    <button onClick={handleLogOut} className="text-xl hover:bg-red-50 text-red-300">
                                        Logout <FiLogOut></FiLogOut>
                                    </button>
                                </li>
                                

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;