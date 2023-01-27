import pb from "lib/pocketbase";
import { usePocketbase } from "hooks/usePocketbase";
import React, { useState } from "react";
import TaskView from "components/TaskView";
import NewTaskView from "components/NewTaskView";
import MenuBar from "components/MenuBar";
import TaskOverview from "components/TaskOverview";
import MountainProgressView from "components/Dashboard/MountainProgressView";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "../assets/styles/Dashboard.css";

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
        <div className="h-screen w-[100%] bg-white">
            <MenuBar itemFocus={"Dashboard"} />
            {loginStatus &&
                `Welcome back ${pb.authStore.model.name.split(" ")[0]}!`}
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogout}
            >
                Log Out
            </button>
            <div id="dashBoardWrapper">
                <TaskOverview />
                <Calendar
                    className=""
                    value={selectedDay}
                    onChange={setSelectedDay}
                    shouldHighlightWeekends
                />
                <MountainProgressView />
                <NewTaskView />
            </div>
        </div>
    );
}
export default Dashboard;
