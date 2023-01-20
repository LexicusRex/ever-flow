import pb from "lib/pocketbase";
import { usePocketbase } from "hooks/usePocketbase";
import React, { useEffect } from "react";

function Dashboard({ loginStatus, handleLogout }) {
    const { getGroups, getUsers } = usePocketbase();

    useEffect(() => {
        const loadData = async () => {
            const result1 = await getGroups();
            const result2 = await getUsers();
            console.log(
                "🚀 ~ file: LoginPage.js:31 ~ loadData ~ result",
                result1
            );
            console.log(
                "🚀 ~ file: Dashboard.js:12 ~ loadData ~ result2",
                result2
            );
        };

        loadData();
    }, []);

    return (
        <div>
            {loginStatus &&
                `Welcome back ${pb.authStore.model.name.split(" ")[0]}!`}
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogout}>
                Log Out
            </button>
        </div>
    );
}
export default Dashboard;
