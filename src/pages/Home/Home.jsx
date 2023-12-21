import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-gray-200">
            <p>home Page</p>
            <Link to={'/'} className="my-btn flex">
                    home
            </Link>
        </div>
    );
};

export default Home;