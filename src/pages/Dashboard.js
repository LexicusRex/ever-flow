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
import LoginPage from "./LoginPage";

function Dashboard({ loginStatus, handleLogout }) {
    // function Dashboard() {
    const [selectedDay, setSelectedDay] = useState(null);
    const formatInputValue = () => {
        if (!selectedDay) return "";
        return `Day: ${selectedDay.day}`;
    };

    return (
        <div className="flex h-full">
            {/* <div className="absolute left-[245px]"> */}
            <MenuBar itemFocus={"Dashboard"} />
            <div className="h-screen min-w-[32rem]"></div>
            <div className="max-w-[170rem] pl-[1.5rem]">
                <div className="flex h-[12.5rem] w-full items-end  px-[2rem]">
                    <div className="flex items-center">
                        <div className="h-[6rem] w-[6rem] rounded-full bg-yellow-300"></div>
                        <div className="px-[2rem] ">
                            <h1 className="text-[3.2rem] font-semibold leading-[2.6rem]">
                                Welcome back{" "}
                                {`${pb.authStore.model.name.split(" ")[0]}!`}
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
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                </div>

                <div className="mb-[3rem] mt-[1.5rem] grid grid-flow-col gap-[4rem]">
                    <TaskOverview />
                    <div className="h-full w-full rounded-[10px] bg-white shadow">
                        {/* <Calendar
                            value={selectedDay}
                            onChange={setSelectedDay}
                            inputPlaceholder="Select a date" // placeholder
                            formatInputText={formatInputValue} // format value
                            shouldHighlightWeekends
                        /> */}
                    </div>
                </div>
                <div className="mt-[3rem] grid grid-flow-col gap-[4rem]">
                    <MountainProgressView />
                    <NewTaskView />
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
