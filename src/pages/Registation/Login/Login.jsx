import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
const Login = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { logInUser } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('')

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }


    return (
        <div className='reg py-10 px-3'>
            <div className='container mx-auto flex justify-center items-center'>
                <div className='rounded bg-[#fff4] shadow-md '>
                    <div className='mt-4 flex justify-center'>
                        <h2 className='text-[#ABFC2F] font-titleText text-2xl'>Log In Fast</h2>
                    </div>
                    <form onSubmit={handleLogin} className="card-body p-4 text-xl">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered text-xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered " required />
                        </div>
                        <div className='mt-2'>
                            {
                                error && <p className='text-red-400'>{error}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <input className='my-btn w-full rounded-md hover:bg-[#ABFC2F]' type="submit" value="Log In" />
                        </div>
                        <p className='text-white'>
                            If you are new, <Link className='text-[#ABFC2F]' to={'/signup'}>Sign Up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;