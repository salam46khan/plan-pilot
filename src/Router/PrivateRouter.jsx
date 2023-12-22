import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    if (loader) {
        return <>
            <div className="sweet-loading w-full h-52 flex justify-center items-center">
             <p>nai</p>
            </div>
        </>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/login'}></Navigate>
}
PrivateRouter.propTypes = {
    children: PropTypes.object
}
export default PrivateRouter;