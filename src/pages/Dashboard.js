import pb from "lib/pocketbase";
import { usePocketbase } from "hooks/usePocketbase";
import React, { useState } from "react";
import TaskView from "components/TaskView";
import NewTaskView from "components/NewTaskView";
import MenuBar from "components/MenuBar";
import TaskOverview from "components/TaskOverview";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import MountainProgressView from "components/MountainProgressView";
import "../assets/styles/DashBoard.css";

function Dashboard({ loginStatus, handleLogout }) {
    // function Dashboard() {
    // const { getGroups, getUsers } = usePocketbase();

    // useEffect(() => {
    //     const loadData = async () => {
    //         const result1 = await getGroups();
    //         const result2 = await getUsers();
    //         console.log(
    //             "🚀 ~ file: LoginPage.js:31 ~ loadData ~ result",
    //             result1
    //         );
    //         console.log(
    //             "🚀 ~ file: Dashboard.js:12 ~ loadData ~ result2",
    //             result2
    //         );
    //     };

    //     loadData();
    // }, []);
    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <div className="flex h-full">
            {/* <div className="absolute left-[245px]"> */}
            <MenuBar itemFocus={"Dashboard"} />
            <div className="h-screen min-w-[280px] bg-red-300"></div>
            <div className="max-w-[167.5rem] pl-[1.5rem]">
                <div className="flex h-[12.5rem] w-full items-end  px-[2rem]">
                    <div className="flex items-center">
                        <div className="h-[6rem] w-[6rem] rounded-full bg-yellow-300"></div>
                        {loginStatus && (
                            <div className="px-[2rem] ">
                                <h1 className="text-[3.2rem] font-semibold leading-[2.6rem]">
                                    Welcome back{" "}
                                    {`${
                                        pb.authStore.model.name.split(" ")[0]
                                    }!`}
                                </h1>
                                <p className="pt-[1rem] text-[2rem]">
                                    {new Date(Date.now()).toLocaleDateString(
                                        "en-GB",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )}
                                </p>
                            </div>
                        )}
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                </div>

                <div className="w-fit">
                    <div className="mx-auto flex max-w-[160rem]">
                        <TaskOverview />
                        <Calendar
                            value={selectedDay}
                            onChange={setSelectedDay}
                            shouldHighlightWeekends
                        />
                    </div>
                    <div className="mx-auto flex max-w-[160rem]">
                        <MountainProgressView />
                        <NewTaskView />
                    </div>
                </div>
                {/* <div className="grid grid-flow-col py-[1.5rem]">
                    <TaskOverview />
                    <div className="mx-[2rem] my-[1.5rem] h-[100%] w-[313px] rounded-[10px] bg-white shadow"></div>
                </div>
                <div className="grid grid-flow-col pt-[3rem] pb-[2rem]">
                    <div className="mx-[2rem] h-full w-[400px] rounded-[10px] bg-white shadow"></div>
                    <NewTaskView />
                </div> */}
            </div>
        </div>
    );
}
export default Dashboard;
