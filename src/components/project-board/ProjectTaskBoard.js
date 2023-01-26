import MenuBar from "components/MenuBar";
import TaskBranch from "./TaskBranch";
import { useQuery } from "react-query";
import { usePocketbase } from "hooks/usePocketbase";

function ProjectTaskBoard() {
    const { getTasks } = usePocketbase();
    const taskBranches = {};
    function groupTaskByBranch(branchName, task) {
        if (!taskBranches.hasOwnProperty(branchName)) {
            // create empty list and add first task
            taskBranches[branchName] = [task];
        } else {
            taskBranches[branchName].push(task);
        }
    }

    const taskQuery = useQuery([], getTasks);
    taskQuery.data?.forEach((item) => {
        groupTaskByBranch(item.branch, item);
    });

    console.log(
        "🚀 ~ file: ProjectTaskBoard.js:9 ~ ProjectTaskBoard ~ taskBranches",
        taskBranches
    );

    const branchList = [];

    for (const branch in taskBranches) {
        branchList.push(
            <TaskBranch
                key={branch}
                taskBranchName={branch}
                tasks={taskBranches[branch]}
            />
        );
    }

    return (
        // TODO - change width and height to be responsive
        <div
            // h-[82.5rem]
            className="
                flex
                h-fit
                w-[118.5rem]
                justify-between
                rounded-t-[10px]
                bg-[#eceff1]
                px-[1.8rem]
                py-[2.5rem]
            "
        >
            {/* <TaskBranch taskBranchName={"Backlog"} /> */}
            {/* <TaskBranch taskBranchName={"To Do"} /> */}
            {/* <TaskBranch taskBranchName={"In Progress"} /> */}
            {/* <TaskBranch taskBranchName={"Completed"} /> */}
            {branchList}
        </div>
    );
}
export default ProjectTaskBoard;
