import React, { useEffect, useState } from "react";
import Toggle from "./Toggle";
import TaskInfo from "./TaskInfo";
import { RiFilter2Fill } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import useFetch from "hooks/useFetch";

function TaskView() {
    const [tasks, setTasks] = useState("");
    const { getTasks } = useFetch();

    useEffect(() => {
        const taskData = async () => {
            let taskList = [];
            const tmp = await getTasks();
            setTasks(tmp);
            tmp.forEach((e) => {
                console.log(e);
                taskList.push(<TaskInfo info={e} />);
            });
            setTasks(taskList);
        };
        taskData();
    }, []);

    return (
        <div className="w-[100rem] h-[47.5rem] bg-white rounded-[1rem] drop-shadow pt-[2.3rem] min-w-fit">
            {/* Top layer title + switch bar + icons */}
            <div className="flex">
                <div className="ml-[2.1rem]">
                    <h1 className="font-semibold text-[2.2rem] min-w-[20rem] max-w-[35rem] m-0">
                        Scheduled Tasks & Meetings
                    </h1>
                </div>

                {/* <div className="flex flex-row pl-[5rem] ml-auto order-2 "> */}
                <div className="flex flex-row pl-[5rem] ml-auto">
                    <Toggle />

                    <div className="ml-[2.2rem]">
                        <HiOutlineAdjustmentsHorizontal
                            color="#BFBFBF"
                            size={25}
                        />
                    </div>
                    <div className="ml-[1.9rem] mr-[3.5rem]">
                        <RiFilter2Fill color="#BFBFBF" size={25} />
                    </div>
                </div>
            </div>

            {/* Title row */}
            <div className="text-[#776E6E] mt-[2.7rem] mb-[1.7rem] ml-[2.1rem] flex">
                <div className="grid grid-flow-col gap-x-[3.5rem]">
                    <h1 className="text-[1.2rem] min-w-[6rem]">Course ID</h1>
                    <h1 className="text-[1.2rem] min-w-[11rem]">
                        Project Name
                    </h1>
                    <h1 className="text-[1.2rem] w-[20rem]">Task Name</h1>
                </div>
                <div className="ml-auto grid grid-flow-col gap-x-[4rem]">
                    <h1 className="text-[1.2rem] min-w-[6.4rem]">Start Date</h1>
                    <h1 className="text-[1.2rem] min-w-[6.4rem]">Due Date</h1>
                    <h1 className="text-[1.2rem] min-w-[6rem]">Status</h1>
                    <h1 className="text-[1.2rem] mr-[7rem] ml-[2rem]">
                        Progress
                    </h1>
                </div>
            </div>

            {/* Line breaker */}
            <div className="flex justify-center">
                <div className="border-[0.1rem] w-[95%] bg-[#F0F3F6]" />
            </div>

            {/* Tasks */}
            <div className="min-w-fit h-[75%] overflow-auto mt-[2.3rem]">
                {tasks}
            </div>
        </div>
    );
}

export default TaskView;

// <div>
//     <div className="w-[60vw] h-[47.5rem] bg-white rounded-[1rem] drop-shadow">
//         {/* Top layer title + switch bar + icons */}

//         <div>
//             <h1 className="font-semibold text-[2.2rem] ml-[2.1rem] min-w-[20rem]">
//                     Scheduled Tasks & Meetings
//                 </h1>
//         </div>
//         {/* <div className="flex flex-row">
//             <div className="mt-[2.7rem] flex flex-row">
//                 <h1 className="font-semibold text-[2.2rem] ml-[2.1rem] min-w-[20rem]">
//                     Scheduled Tasks & Meetings
//                 </h1>
//                 <div className="flex flex-row">
//                     <Toggle />
//                     <HiOutlineAdjustmentsHorizontal
//                         color="#BFBFBF"
//                         size={25}
//                     />
//                     <RiFilter2Fill color="#BFBFBF" size={25} />
//                 </div>
//             </div> */}
//         </div>

//         {/* Titles: */}
//         {/* <div className="flex flex-row text-[#776E6E] gap-[4rem] mt-[2.7rem] mb-[1.7rem]">
//             <h1 className="text-[1.2rem] ml-[2.3rem]">Course ID</h1>
//             <h1 className="text-[1.2rem]">Project Name</h1>
//             <h1 className="text-[1.2rem] ml-[3rem]">Task Name</h1>
//             <h1 className="text-[1.2rem] ml-[22rem]">Start Date</h1>
//             <h1 className="text-[1.2rem] ml-[4.4rem]">Due Date</h1>
//             <h1 className="text-[1.2rem] ml-[5rem]">Status</h1>
//             <h1 className="text-[1.2rem] ml-[6rem]">Progress</h1>
//         </div> */}

//         {/* Line separator */}
//         {/* <div className="flex justify-center mb-[2.4rem]">
//             <div className="border-[0.1rem] w-[110rem] bg-[#F0F3F6]" />
//         </div> */}

//         {/* All tasks */}
//         {/* <div className="w-screen h-[75%] overflow-auto ">{tasks}</div> */}
//     </div>
// </div>
