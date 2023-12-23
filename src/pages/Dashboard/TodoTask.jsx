import PropTypes from 'prop-types'
import Countdown from 'react-countdown';
import { MdDelete, MdDone } from "react-icons/md";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useTask from '../../Hooks/useTask';

const TodoTask = ({ item }) => {
    const { _id, task, deadline, priority, complite } = item;
    const currentDateTime = new Date();
    const dueDateTime = new Date(deadline);
    const timeDifference = dueDateTime - currentDateTime;
    // const a = dueDateTime > currentDateTime;

    const axiosPublic = useAxiosPublic()
    const [, refetch] = useTask()

    const handleDeleteTask = (id) => {
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

    const handleDone = (id) => {
        console.log(id);
        axiosPublic.patch(`/task/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({

                        icon: "success",
                        title: "Your Task Complite",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }


    return (
        <div className='rounded p-3 bg-slate-50 flex items-center justify-between'>
            <div>
                <p className='text-xl font-titleText'>{task}</p>
                <p className=''>{priority}</p>
                <p><Countdown date={Date.now() + timeDifference} /></p>
                
            </div>
            <div className='flex flex-col gap-2'>
                <button onClick={() => handleDeleteTask(_id)} className='btn btn-circle bg-red-100 text-red-400 text-2xl hover:text-slate-100 hover:bg-red-400 duration-200 border-none'>
                    <MdDelete />
                </button>
                <button onClick={() => handleDone(_id)} className={`btn btn-circle bg-green-100 text-green-400 text-2xl hover:text-slate-100 hover:bg-green-400 duration-200 border-none ${complite === true ? 'btn-disabled': ''}`}>
                    <MdDone />
                </button>
            </div>
        </div>
    );
};
TodoTask.propTypes = {
    item: PropTypes.object
}
export default TodoTask;