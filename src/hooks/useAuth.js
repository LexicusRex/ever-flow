import pb from "lib/pocketbase";

const useAuth = () => {
    return pb.authStore;
};
export default useAuth;
