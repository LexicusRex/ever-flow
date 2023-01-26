import PocketBase from "pocketbase";

export const usePocketbase = () => {
    const pb = new PocketBase(process.env.REACT_APP_PB_URL);

    const getGroups = async () => {
        return pb.collection("groups").getFullList(200, { sort: "-created" });
    };

    const getTasks = async () => {
        return pb
            .collection("tasks")
            .getFullList(200, { sort: "-created", expand: "groups" });
    };

    const getUsers = async () => {
        return pb.collection("users").getFullList(200, { sort: "-created" });
    };

    return {
        getGroups,
        getTasks,
        getUsers,
    };
};
