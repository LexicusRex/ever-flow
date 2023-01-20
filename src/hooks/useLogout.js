import { useState } from "react";
import pb from "lib/pocketbase";

export default function useLogout() {
    const [, setTemp] = useState(0);

    function logout() {
        pb.authStore.clear();
        setTemp(Math.random());
    }
    return logout;
}
