import { useState } from "react";
import { useMutation } from "react-query";
import pb from "lib/pocketbase";

export default function useLogin() {
    async function login({ email, password }) {
        const authData = await pb
            .collection("users")
            .authWithPassword(email, password);
    }
    return useMutation(login); // handles loading and try catch blocks for auth call
}
