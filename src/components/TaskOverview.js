import TaskStatCard from "./TaskStatCard";

function TaskOverview() {
    // TODO - TIme Range
    const taskStat1 = {
        counter: "8",
        subtitle: "Ongoing Tasks",
        stats: "2% increase from Last Month",
    };
    const taskStat2 = {
        counter: "3",
        subtitle: "Ongoing Projects",
        stats: "0% increase from Last Month",
    };
    const taskStat3 = {
        counter: "2",
        subtitle: "Ongoing Tasks",
        stats: "2% Decrease from Last Month",
    };
    const taskStat4 = {
        counter: "22",
        subtitle: "Completed Tasks",
        stats: "6% increase from Last Month",
    };

    return (
        <div
            // max-w-[122rem]
            // h-full
            // w-full
            className="
                mx-[2rem]
                my-[1.5rem] 
                h-full
                max-w-[122rem]
                rounded-xl
                bg-white
                py-[1.5rem]
                px-[1.4rem]
                shadow
            "
        >
            <div className="flex p-[1.3rem]">
                <h2 className="text-[3rem] font-semibold leading-[4.5rem]">
                    Overview
                </h2>
                <select
                    id="dropdown"
                    className={`
                        order-2 
                        ml-auto
                        h-[5.4rem] 
                        w-[22.8rem] 
                        rounded-[1.2rem] 
                        border-[1.2px] 
                        border-[#adadad33] 
                        pl-[2.4rem] 
                        text-[1.3rem] 
                        leading-[2rem] 
                        shadow-sm
                        focus:outline-none
                    `}
                    defaultValue={"week"}
                    required
                >
                    <option value="week">Last Week</option>
                    <option value="month">Last 30 Days</option>
                    <option value="quarter">Last 3 Months</option>
                    <option value="year">Last Year</option>
                    <option value="other">Custom</option>
                </select>
            </div>
            <div
                id="task-tile-group"
                className="flex flex-wrap items-center justify-evenly"
            >
                <TaskStatCard {...taskStat1} />
                <TaskStatCard {...taskStat2} />
                <TaskStatCard {...taskStat3} />
                <TaskStatCard {...taskStat4} />
            </div>
        </div>
    );
}
export default TaskOverview;
