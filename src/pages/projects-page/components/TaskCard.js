import { useState } from "react";
import TaskModal from "./TaskModal";

function TaskCard({ priority, title, info, startDate, dueDate, assignee }) {
    const priorityColor = {
        low: "text-secondary bg-[#DEDEDE35] border-[#b4b4b4]",
        high: "text-[#E76A6A] bg-[#e56b6b34] border-[#FF6262]",
        done: "text-[#3FBE7F] bg-[#83C96A4d] border-[#83C96A]",
    };

    // const duePriority = switch (Date.parse(dueDate) - Date.now) {

    //     case value:

    //         break;

    //     default:
    //         break;
    // }

    const [isModalOpen, setModalState] = useState(false);

    const dateDue = new Date(Date.parse(dueDate));
    const dateStart = new Date(Date.parse(startDate));
    const dateNow = Date.now();

    let progress = 0;

    if (dateNow >= dateStart && dateNow < dateDue) {
        progress = Math.floor(
            ((dateNow - dateStart) / (dateDue - dateStart)) * 100
        );
    }
    progress = progress.toString() + "%";

    // some checks to make
    //  current time >= dateStart
    //  current time < dateDue
    // if time now is past dateDue and status is NOT "done", RED LINE
    // progression is over 95% and status is NOT "done", RED LINE

    const taskInfoStyles = "truncate";
    const lineHeight = "leading-[2.6rem]";
    const taskProps = {
        priority,
        title,
        info,
        dateDue,
        assignee,
        progress,
    };
    return (
        <div>
            <div
                className="mt-[1.7rem] min-h-[17.5rem] w-full rounded-[2rem] 
                bg-white px-[1.7rem] pt-[1.5rem] pb-[1rem] duration-500 
                ease-in-out hover:cursor-pointer hover:shadow-lg"
                onClick={() => setModalState(true)}
            >
                <div id="task-header">
                    <div
                        id="task-priority"
                        className={`${priorityColor[priority]} flex h-[1.2rem] w-[3rem] items-center justify-center rounded-sm text-[8px]`}
                    >
                        {priority?.toUpperCase()}
                    </div>
                    {/* TODO - settings */}
                </div>
                <div id="task-text" className="py-[1.5rem] text-left">
                    <div
                        id="task-title"
                        className={`${taskInfoStyles} mb-[4px] text-[2rem] font-semibold ${lineHeight}`}
                    >
                        {title}
                    </div>
                    <div
                        id="task-info"
                        className={`${taskInfoStyles} mb-[4px] h-[2.6rem] text-[1.2rem] ${lineHeight} text-secondary`}
                    >
                        {info}
                    </div>
                    <div
                        id="task-date"
                        className={`
                            ${priorityColor[priority]}
                            flex
                            h-[2rem]
                            w-fit
                            items-center
                            justify-center
                            rounded-[10px]
                            border-[0.5px]
                            px-[1rem]
                            text-[1.2rem]
                            font-medium
                            ${lineHeight}
                        `}
                    >
                        {dateDue.toLocaleDateString("en-GB", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </div>
                </div>
                <div className="flex justify-between">
                    <img
                        src="https://unsplash.it/28/28
                    "
                        alt=""
                        id="task-assignee"
                        className="h-[2.8rem] w-[2.8rem] rounded-[50%]"
                    />

                    <div
                        id="task-progress"
                        className={`text-[1.4rem] font-medium ${lineHeight} text-secondary`}
                    >
                        {progress}
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <TaskModal
                    setModalOpen={setModalState}
                    taskTitle={title}
                    {...taskProps}
                />
            )}
        </div>
    );
}
export default TaskCard;
