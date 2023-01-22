import pb from "lib/pocketbase";

export default function useFetch() {
    const getTasks = async () => {
        return pb.collection("tasks").getFullList(200, { sort: "-created" });
    };
    return {
        getTasks,
    };
}
