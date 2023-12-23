
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";
import useTask from "../../Hooks/useTask";

const TaskUpdate = () => {
    const pathId = useParams()
    const taskId = pathId.id;
    const [tastData, setTaskData] = useState({})
    const axiosPublic = useAxiosPublic()
    axiosPublic.get(`task/${taskId}`)
        .then(res => {
            // console.log(res.data);
            setTaskData(res.data)
        })

    const [, refetch] = useTask()
    // console.log(tastData);
    const { _id, task, description, deadline, priority } = tastData;

    const handleUpdateTask = e => {
        e.preventDefault()
        console.log('update');
        const form = e.target;
        const task = form.task.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;

        const updateTask = { task, description, deadline, priority }

        axiosPublic.put(`/task/${_id}`, updateTask)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Your news Update successfuly",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }
    return (
        <div className="p-5 flex justify-center items-center ">
            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-slate-100 text-xl">
                <div className="text-center">
                    <h2 className="text-2xl font-titleText mt-3">Update Your Task</h2>
                </div>
                <form onSubmit={handleUpdateTask} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task</span>
                        </label>
                        <input type="text" name="task" defaultValue={task} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Description</span>
                        </label>
                        <textarea type="text" name="description" defaultValue={description} className="textarea-bordered textarea" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>

                        <input
                            className="input input-bordered text-black"
                            type="datetime-local"
                            name="deadline"
                            defaultValue={deadline}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select name="priority" defaultValue={priority} className="select select-bordered text-black">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn bg-[#abfc2f] hover:bg-[#9ce232]" type="submit" value="Update Task" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskUpdate;