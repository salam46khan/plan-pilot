import { Link } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import './Error.css'
const Error = () => {
    return (
        <div className="err py-10 px-3 h-screen">
            <div className="container mx-auto h-full flex justify-center items-center">
                <div className="max-w-[300px] text-base-100 text-center">
                    
                    <p className='text-5xl font-titleText'>Sorry!</p>
                    <p>This Page is Not Found</p>
                    
                    <div className='flex flex-col md:flex-row gap-3 mt-3'>
                        <Link to={-1} className="my-btn btn-flex">
                            go back
                            <TiArrowBack className='text-2xl'></TiArrowBack>
                        </Link>
                        <Link to={'/'} className="my-btn btn-flex">
                            go Home
                            <FaHome className='text-2xl'></FaHome>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;