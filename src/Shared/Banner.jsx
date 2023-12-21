import { Link } from 'react-router-dom';
import './banner.css'
import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className="banner">
            <div className='container mx-auto flex justify-center items-center h-full py-10 px-3 text-[20px]'>
                <div className='text-center text-base-200  space-y-1'>
                    <p>Hi there! At</p>
                    <h2 className='text-5xl font-titleText'>Plan<span className='text-[#ABFC2F]'>Pilot</span></h2>
                    <p className='max-w-[470px] mx-auto'>
                    we are on a mission to revolutionize the way you manage tasks and streamline your workflow
                    </p>
                    <Link className='my-btn btn-flex mx-auto' to={'/'}>
                        Let's Explore
                        <FaArrowRight></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;