import TaskCard from "./TaskCard";

function TaskBranch({ taskBranchName, tasks }) {
    const card1 = {
        priority: "high",
        title: "Assignment Plan",
        info: "Assign and divide tasks",
        dueDate: "16 Apr, 2023",
        assignee: "Boggis, Bunce, Bean",
        progress: "20%",
    };
    const card2 = {
        priority: "done",
        title: "Pick Project",
        info: "Select the project to be completed",
        dueDate: "9 Apr, 2023",
        assignee: "Boggis, Bunce, Bean",
        progress: "20%",
    };

    const taskList = tasks?.map((task) => {
        return <TaskCard key={task.id} {...task} />;
    });

    return (
        <div id="branch-area" className="h-full w-[26rem]">
            <div className="flex h-[5.5rem] items-center rounded-[10px] bg-white px-[2.3rem] text-[2.2rem] font-medium leading-[2.6rem]">
                {taskBranchName}
            </div>
            {/* <TaskCard {...card1} />
            <TaskCard {...card2} /> */}
            {taskList}
        </div>
    );
}
export default TaskBranch;
