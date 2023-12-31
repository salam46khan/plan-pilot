import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useTask from "../../Hooks/useTask";
import Swal from "sweetalert2";

const DashHome = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const [, refetch] = useTask()

    const handleCreateTask = e => {
        e.preventDefault()
        const form = e.target;
        const task = form.task.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;

        const complite = false;
        const userEmail = user.email;
        const taskContent = { task, description, deadline, priority, complite, userEmail }
        console.log(taskContent);

        axiosPublic.post('/task', taskContent)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your task added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                    refetch()
                }
            })

    }
    return (
        <div className="p-5 flex justify-center items-center ">
            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-slate-100 text-xl">
                <div className="text-center">
                    <h2 className="text-2xl font-titleText mt-3">Create Your Task</h2>
                </div>
                <form onSubmit={handleCreateTask} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task</span>
                        </label>
                        <input type="text" name="task" placeholder="task name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Description</span>
                        </label>
                        <textarea type="text" name="description" placeholder="task description" className="textarea-bordered textarea" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>

                        <input
                            className="input input-bordered text-black"
                            type="datetime-local"
                            name="deadline"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select name="priority" className="select select-bordered text-black">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn bg-[#abfc2f] hover:bg-[#9ce232]" type="submit" value="Create Task" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DashHome;