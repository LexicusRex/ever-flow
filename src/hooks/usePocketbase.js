import PocketBase from "pocketbase";

export const usePocketbase = () => {
    const pb = new PocketBase(process.env.REACT_APP_PB_URL);

    const getGroups = async () => {
        return pb.collection("messages").getFullList(200, { sort: "-created" });
    };

    const getUsers = async () => {
        return pb.collection("users").getFullList(200, { sort: "-created" });
    };

    return {
        getGroups,
        getUsers,
    };
};
