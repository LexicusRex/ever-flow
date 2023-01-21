import { useState } from "react";
import { useMutation } from "react-query";
import pb from "lib/pocketbase";

function useSignup() {
    async function signup({ firstName, lastName, userEmail, userPassword }) {
        // example create data

        const data = {
            username: (firstName + lastName).toLowerCase(),
            email: userEmail,
            emailVisibility: true,
            password: userPassword,
            passwordConfirm: userPassword,
            name: `${firstName} ${lastName}`,
            role: "student",
        };

        const record = await pb.collection("users").create(data);
        return record;
    }

    return useMutation(signup);
}
export default useSignup;
