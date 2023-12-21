import { Link } from 'react-router-dom';
import './Footer.css'
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdLocationPin } from "react-icons/md";
const Footer = () => {
    return (
        <div className='footer py-10 px-3'>
            <div className='container mx-auto text-base-100'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full text-center'>
                    <div className='p-3 md:text-left space-y-2'>
                        <h2 className='font-titleText text-3xl'>Plan<span className='text-[#ABFC2F]'>Pilot</span></h2>
                        <p className='text-[18px]'>
                            At planPilot, we are on a mission to revolutionize the way you manage tasks and streamline your workflow. We believe that every project, big or small, deserves a robust and intuitive task management solution.
                        </p>
                        <div className=''>
                            <Link className='my-bt border my-btn btn-flex mx-auto md:ml-0' to={'/about'}>
                                See More
                                <FaArrowRight></FaArrowRight>
                            </Link>
                        </div>
                    </div>
                    <div className='p-3 lg:text-left text-[16px]'>
                        <h4 className='text-2xl'>Quick Links</h4>
                        <div className='mt-3'>
                            <ol className='footer-link'>
                                <li><Link to={'/'}>About Us</Link></li>
                                <li><Link to={'/'}>Beneficiary</Link></li>
                                <li><Link to={'/'}>Contact Us</Link></li>
                                <li><Link to={'/'}>Feedback</Link></li>
                            </ol>
                        </div>
                    </div>
                    <div className='p-3 md:text-left text-[16px]'>
                        <h4 className='text-2xl'>Address</h4>
                        <div className='mt-3 space-y-2 '>
                            <div className='flex items-center justify-center md:justify-normal gap-2'>
                                <MdLocationPin className='text-2xl '></MdLocationPin>
                                <span>Satkhira, Bangladesh</span>
                            </div>
                            <div className='flex items-center justify-center md:justify-normal gap-2'>
                                <FaPhoneAlt className='text-2xl'> </FaPhoneAlt>
                                <span>+8801771-393709</span>
                            </div>
                            <div className='flex justify-center md:justify-normal items-center gap-2'>
                                <MdEmail className='text-2xl'></MdEmail>
                                <span>abcd@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div></div>
                        <div className='p-3'>
                            <h4 className='text-2xl'>Follow Us</h4>
                            <div className='flex justify-center items-center flex-wrap my-3 gap-2'>
                                <Link className='round-btn' to={'/'}>
                                    <FaFacebookF />
                                </Link>
                                <Link className='round-btn' to={'/'}>
                                    <FaInstagram />
                                </Link>
                                <Link className='round-btn' to={'/'}>
                                    <FaTwitter />
                                </Link>
                                <Link className='round-btn' to={'/'}>
                                    <FaLinkedinIn />
                                </Link>
                                <Link className='round-btn' to={'/'}>
                                    <FaTelegramPlane />
                                </Link>
                            </div>
                            <div className='mt-3'>
                                <Link to={'/contact'} className='my-btn'>
                                    Contacat Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;