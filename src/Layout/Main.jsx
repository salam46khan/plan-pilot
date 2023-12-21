import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";

const Main = () => {
    return (
        <div>
            {/* <h2>head</h2> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;