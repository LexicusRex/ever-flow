import { useQuery } from "react-query";
import { usePocketbase } from "hooks/usePocketbase";
import NewTaskInfo from "./NewTaskInfo";
import clsx from "clsx";
import NewTaskViewHeader from "./NewTaskViewHeader";
import Toggle from "./Toggle";
import { RiFilter2Fill } from "react-icons/ri";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

function NewTaskView() {
    const { getGroups, getUsers } = usePocketbase();

    const taskQuery = useQuery([], getGroups);
    const tempList = taskQuery.data?.map((item) => {
        return <NewTaskView taskInfo={item} />;
    });

    const taskTrack1 = {
        course: "FINS1613",
        project: "OogaBooga",
        task: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
        start: "11/8/2001",
        due: "Thursday",
        status: "ongoing",
        progress: "40%",
    };
    const taskTrack2 = {
        course: "FINS3666",
        project: "WXY",
        task: "Complete video presentation",
        start: "13/6/2020",
        due: "16/6/2020",
        status: "assigned",
        progress: "20%",
    };
    const taskTrack3 = {
        course: "COMP3311",
        project: "SQL",
        task: "Complete PostGreSQL exercise",
        start: "19/11/2022",
        due: "19/11/2022",
        status: "complete",
        progress: "20%",
    };

    return (
        <div
            className={clsx(
                "max-w-[115rem]",
                "flex",
                "flex-column",
                "h-[47.5rem]",
                "bg-white",
                "rounded-[1rem]",
                "mx-auto",
                "py-[2.3rem]"
            )}
        >
            <div className="flex">
                <h2 className="px-[2.3rem] text-[2.2rem] font-semibold leading-8">
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
            <div className="overflow-y-auto">
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack2} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack1} />
                <NewTaskInfo {...taskTrack3} />
                <NewTaskInfo {...taskTrack2} />
            </div>
        </div>
    );
}
export default NewTaskView;
