import { FaUserTie } from "react-icons/fa";
import useIdentity from "../Hooks/useIdentity";

const Profile = () => {
    const {identity, isLoading} = useIdentity()
    if(isLoading){
        return <div className="text-center"> <span className="loading loading-ring loading-md"></span> </div>
    }
    console.log(identity);
    return (
        <div className="py-3">
            <div className="text-center">
                <div className="h-20 w-20 border rounded-full mx-auto overflow-hidden flex justify-center items-center">
                    {
                        identity?.photo ?
                            <img className="h-full w-full" src={identity?.photo} alt="" />
                            :
                            <FaUserTie className="text-7xl"> </FaUserTie>
                    }
                </div>
                <p>{identity.name}</p>
            </div>
        </div>
    );
};

export default Profile;