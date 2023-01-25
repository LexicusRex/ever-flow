// import pb from "lib/pocketbase";
// import { usePocketbase } from "hooks/usePocketbase";
import React from "react";
import TaskView from "components/TaskView";
import NewTaskView from "components/NewTaskView";
import MenuBar from "components/MenuBar";

// function Dashboard({ loginStatus, handleLogout }) {
function Dashboard() {
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

    return (
        <div className="h-screen w-[100%] bg-black">
            <MenuBar itemFocus={"Dashboard"} />
            {/* {loginStatus &&
                `Welcome back ${pb.authStore.model.name.split(" ")[0]}!`}
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogout}>
                Log Out
            </button> */}
            <div>
                <NewTaskView />
            </div>
        </div>
    );
}
export default Dashboard;
