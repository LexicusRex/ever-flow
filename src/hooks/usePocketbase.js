import PocketBase from "pocketbase";

export const usePocketbase = () => {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const getUsers = async () => {
        return pb.collection("users").getFullList(200, {
            sort: "-created",
        });
    };

    const getCourses = async () => {
        return pb.collection("courses").getFullList(200, {
            sort: "-created",
            expand: "participants(name)",
        });
    };

    const getTutorials = async (courseId) => {
        return pb.collection("tutorials").getFullList(200, {
            sort: "-created",
            filter: `course = "${courseId}"`,
            expand: "students",
        });
    };

    const getAssignments = async () => {
        return pb
            .collection("assignments")
            .getFullList(200, { sort: "-created" });
    };

    const getGroups = async () => {
        return pb
            .collection("groups")
            .getFullList(200, { sort: "-created", expand: "members" });
    };

    const getTasks = async () => {
        return pb
            .collection("tasks")
            .getFullList(200, { sort: "created", expand: "temp" });
    };

    return {
        getGroups,
        getTasks,
        getUsers,
        getCourses,
        getTutorials,
        getAssignments,
    };
};
