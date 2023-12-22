import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () =>{
        console.log('ok');
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName,
                    photo: result.user.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res =>{
                        console.log(res.data);
                    })
                navigate('/')
            })
            .catch(error =>{
                console.log(error);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn bg-[#ABFC2F] hover:bg-[#8fcf27] w-full font-normalText border-none'>
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
        </div>
    );
};

export default GoogleLogin;