import TaskCard from "./TaskCard";

function TaskBranch({ taskBranchName, tasks }) {
    const taskList = tasks?.map((task) => {
        return <TaskCard key={task.id} {...task} />;
    });

    return (
        // mx-[1.8rem]
        <div id="branch-area" className="h-full w-[26rem] px-2">
            <div className="mt-[3.5rem] flex h-[5.5rem] items-center rounded-[10px] bg-white px-[2.3rem] text-[2.2rem] font-medium leading-[2.6rem]">
                {taskBranchName}
            </div>
            {taskList}
        </div>
    );
}
export default TaskBranch;
