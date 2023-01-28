import clsx from "clsx";
import "../assets/styles/Task.css";

function NewTaskInfo({ course, project, task, start, due, status, progress }) {
    const statusColors = {
        assigned: "text-orange-500",
        ongoing: "text-yellow-500",
        complete: "text-green-500",
    };
    const taskInfoStyles = "truncate";

    return (
        <div
            className={clsx(
                "flex",
                "h-[28.5px]",
                "items-center",
                "justify-between",
                "px-[2.3rem]",
                "text-[1.2rem]",
                "text-[#414141]",
                "hover:bg-mild-accent"
            )}
        >
            <div id="task-view" className={`w-[6rem] ${taskInfoStyles}`}>
                {course}
            </div>
            <div className={`w-[15rem]  ${taskInfoStyles}`}>{project}</div>
            <div className={`w-[30rem] ${taskInfoStyles}`}>{task}</div>
            <div id="task-view-a" className={`w-[6.4rem]`}>
                {start}
            </div>
            <div className={`w-[6.4rem]`}>{due}</div>
            <div className={`w-[6rem] ${statusColors[status]}`}>{status}</div>
            <div
                id="taskInfoProgressBar"
                className={clsx(
                    "h-[1.3rem]",
                    "w-[11rem]",
                    "hidden",
                    "2xl:block",
                    // "min-w-[10rem]",
                    // "max-w-[14rem]",
                    "rounded-[0.2rem]",
                    "bg-[#D9D9D9]"
                )}
            >
                <div
                    className={clsx(
                        "h-full",
                        `w-[${progress}%]`,
                        "rounded-[0.2rem]",
                        "bg-[#83C96A]"
                    )}
                />
            </div>
        </div>
    );
}
export default NewTaskInfo;
