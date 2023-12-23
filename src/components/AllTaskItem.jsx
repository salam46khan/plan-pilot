import PropTypes from 'prop-types'
import Countdown from 'react-countdown';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useTask from '../Hooks/useTask';
import { Link } from 'react-router-dom';
const AllTaskItem = ({ item }) => {

    const axiosPublic = useAxiosPublic()
    const [,refetch] = useTask()
    const { task, deadline, priority, complite, description, _id } = item

    const currentDateTime = new Date();
    const dueDateTime = new Date(deadline);
    const timeDifference = dueDateTime - currentDateTime;

    const handleDeleteTask = id => {
        console.log(id);
        axiosPublic.delete(`/task/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your task delete successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    return (
        <div className={`overflow-hidden relative rounded p-4 grid grid-cols-1 md:grid-cols-3 items-center ${complite ? 'bg-lime-600' : 'bg-yellow-600'}`}>
            <div className=' text-center md:text-left'>
                <p className='text-2xl font-titleText uppercase'>{task}</p>
                <p>{description}</p>
            </div>
            <div className='text-center '>
                <p>Deadline</p>
                <Countdown date={Date.now() + timeDifference} />
            </div>

            <div className='flex px-10 mx-auto md:mx-0 flex-col gap-2 '>
                <button onClick={() => handleDeleteTask(_id)} className='my-btn btn-flex'>delete</button>
                <Link to={`/dashboard/update/${_id}`} className='my-btn btn-flex'>Edit</Link>
            </div>

            <div className='absolute  bottom-5  -right-12 bg-slate-100 -rotate-45  w-[160px] text-center text-black'>
                <p>{priority}</p>
            </div>
        </div>
    );
};
AllTaskItem.propTypes = {
    item: PropTypes.object
}

export default AllTaskItem;