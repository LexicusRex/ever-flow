import MenuBar from "components/MenuBar";
import TaskBranch from "./TaskBranch";
import { useQuery } from "react-query";
import { usePocketbase } from "hooks/usePocketbase";
import clsx from "clsx";

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
            // px-[1.8rem]
            // w-[118.5rem]
            className={clsx(
                "flex",
                "flex-wrap",
                "h-fit",
                // "max-h-[82.5rem]",
                // "h-full",
                // "w-[120rem]",
                "w-full",
                "justify-around",
                "overflow-auto",
                "rounded-t-[10px]",
                "bg-[#eceff1]",
                "pb-[2.5rem]",
                "px-[2.5rem]"
            )}
            // className={clsx(
            //     "grid",
            //     "h-fit",
            //     "max-h-[82.5rem]",
            //     "w-full",
            //     "justify-items-center",
            //     "overflow-auto",
            //     "rounded-t-[10px]",
            //     "bg-[#eceff1]",
            //     "pb-[2.5rem]",
            //     "sm:grid-cols-2",
            //     "md:grid-cols-3",
            //     "lg:grid-cols-4"
            // )}
            // className="
            //     flex
            //     h-fit
            //     max-h-[82.5rem]
            //     w-[120rem]
            //     flex-wrap
            //     items-center
            //     justify-around
            //     overflow-auto
            //     rounded-t-[10px]
            //     bg-[#eceff1]
            //     pb-[2.5rem]
            // "
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
