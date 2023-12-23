import useTask from "../../Hooks/useTask";
import TodoTask from "./TodoTask";

const ToDo = () => {
    const [task] = useTask()
    console.log(task);

    const complite = task.filter(item => item.complite === true)
    console.log(complite);

    // const currentDateTime = new Date();
    // const dueDateTime = new Date(deadline);
    // const timeDifference = dueDateTime - currentDateTime;
    // const a = dueDateTime > currentDateTime;

    const outgoing = task.filter(item => item.complite === false && new Date(item.deadline) < new Date())
    return (
        <div className="bg-[#fff2] grid grid-cols-1 md:grid-cols-3 gap-3 p-3">
            <div className="bg-red-50 p-3">
                <h3 className="text-xl font-titleText text-center">To Do list</h3>
                <hr />
                <div className="flex flex-col gap-2 mt-3">
                    {
                        task.map(item => <TodoTask item={item} key={item._id}></TodoTask>)
                    }
                </div>
            </div>
            <div className="bg-lime-50 p-3">
                <h3 className="text-xl font-titleText text-center">Outgoing</h3>
                <hr />
                <div className="flex flex-col gap-2 mt-3">
                    {
                        outgoing.map(item => <TodoTask item={item} key={item._id}></TodoTask>)
                    }
                </div>
            </div>
            <div className="bg-cyan-50 p-3">
                <h3 className="text-xl font-titleText text-center">Complite</h3>
                <hr />
                <div className="flex flex-col gap-2 mt-3">
                    {
                        complite.map(item => <TodoTask item={item} key={item._id}></TodoTask>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ToDo;