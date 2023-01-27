import { useQuery } from "react-query";
import { usePocketbase } from "hooks/usePocketbase";
import NewTaskInfo from "./NewTaskInfo";
import clsx from "clsx";
import NewTaskViewHeader from "./NewTaskViewHeader";
import Toggle from "./Toggle";
import { RiFilter2Fill } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import "../assets/styles/TaskView.css";

function NewTaskView() {
    const { getGroups, getUsers } = usePocketbase();

    const taskQuery = useQuery([], getGroups);
    const tempList = taskQuery.data?.map((item) => {
        return <NewTaskView taskInfo={item} />;
    });

    const taskTrack1 = {
        course: "FINS1613",
        project: "ABCDEFGHIJ",
        task: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
        start: "11/8/2001",
        due: "Thursday",
        status: "ongoing",
        progress: "50",
    };
    const taskTrack2 = {
        course: "FINS3666",
        project: "TUVWXYZ",
        task: "Complete video presentation",
        start: "13/6/2020",
        due: "16/6/2020",
        status: "assigned",
        progress: "20",
    };
    const taskTrack3 = {
        course: "COMP3311",
        project: "SQLisCOOL",
        task: "Complete PostGreSQL exercise",
        start: "19/11/2022",
        due: "19/11/2022",
        status: "complete",
        progress: "100",
    };

    return (
        <div
            className={clsx(
                "w-[80%]",
                "flex",
                "flex-column",
                "h-[47.5rem]",
                "bg-white",
                "rounded-[1rem]",
                "py-[2.3rem]",
                "mx-[1.5rem]",
                "my-[1.5rem]",
                "drop-shadow"
            )}
        >
            <div className="flex">
                <h2 className="min-w-[24.5rem] px-[2.3rem] text-[2.2rem] font-semibold leading-8">
                    Scheduled Tasks & Meetings
                </h2>
                <div className="ml-auto flex pl-[5rem]">
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
            <NewTaskViewHeader />
            <div id="task-info-area" className="overflow-y-auto">
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack1} />
            </div>
        </div>
    );
}
export default NewTaskView;
