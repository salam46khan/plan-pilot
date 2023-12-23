
import useTask from "../../Hooks/useTask";
import AllTaskItem from "../../components/AllTaskItem";

const AllTask = () => {
    const [task] = useTask()
   
    
    return (
        <div className="text-white">
           
            <div className="flex flex-col gap-4 p-5">
                {
                    task.map(item => <AllTaskItem key={item._id} item={item}></AllTaskItem>)
                }
            </div>
        </div>
    );
};

export default AllTask;