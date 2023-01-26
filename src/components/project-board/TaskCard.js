function TaskCard({ priority, title, info, dueDate, assignee, progress }) {
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

    const dateDue = new Date(Date.parse(dueDate));
    const taskInfoStyles = "truncate";
    const lineHeight = "leading-[2.6rem]";
    return (
        <div className="mt-[1.7rem] min-h-[17.5rem] w-full rounded-[2rem] bg-white px-[1.7rem] pt-[1.5rem] pb-[1rem] duration-500 ease-in-out hover:cursor-pointer hover:shadow-lg">
            <div id="task-header">
                <div
                    id="task-priority"
                    className={`${priorityColor[priority]} flex h-[1.2rem] w-[3rem] items-center justify-center rounded-sm border-[0.5px] text-[8px]`}
                >
                    {priority?.toUpperCase()}
                </div>
            </div>
            <div id="task-text" className="py-[1.5rem]">
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
                    className={`${priorityColor[priority]} flex h-[2rem] w-[8.8rem] items-center justify-center rounded-[10px] border-[0.5px] text-[1.2rem] font-medium ${lineHeight}`}
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
                    2%
                </div>
            </div>
        </div>
    );
}
export default TaskCard;
