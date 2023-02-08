import MenuBar from "components/MenuBar";
import { usePocketbase } from "hooks/usePocketbase";
import { useEffect } from "react";

const Database = () => {
    const { getGroups, getUsers, getTasks, getCourses, getTutorials } =
        usePocketbase();

    useEffect(() => {
        const loadData = async () => {
            // const groups = await getGroups();
            // console.log(JSON.stringify(groups[0].expand.members, null, 4));
            // const users = await getUsers();
            // console.log(
            //     "🚀 ~ file: Database.js:7 ~ Database ~ users",
            //     JSON.stringify(users, null, 4)
            // );
            const courses = await getCourses();
            console.log(
                "🚀 ~ file: Database.js:7 ~ Database ~ courses",
                JSON.stringify(courses, null, 4)
            );
            const courseId = courses[0].id;
            console.log(
                "🚀 ~ file: Database.js:24 ~ loadData ~ courseId",
                typeof courseId
            );
            const tutorials = await getTutorials(courseId);

            console.log(
                "🚀 ~ file: Database.js:7 ~ Database ~ tutorials",
                JSON.stringify(tutorials, null, 4)
            );
            // const tasks = await getTasks();
            // console.log(
            //     "🚀 ~ file: Database.js:7 ~ Database ~ tasks",
            //     JSON.stringify(tasks, null, 2)
            // );
        };
        loadData();
    }, []);

    return (
        <div className="h-full">
            <MenuBar />
        </div>
    );
};
export default Database;
