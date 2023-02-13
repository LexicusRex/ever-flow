import { renderHook, act, waitFor } from "@testing-library/react";
import useLogin from "hooks/useLogin";
import { QueryClient, QueryClientProvider } from "react-query";
import pb from "lib/pocketbase";

const createWrapper = () => {
    const queryClient = new QueryClient();
    return ({ children }) => (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

test("user login hook", async () => {
    pb.authStore.clear();
    const { result } = renderHook(() => useLogin(), {
        wrapper: createWrapper(),
    });

    const { mutate: loginFunc, isLoading, isError } = result.current;
    act(() => {
        loginFunc({ email: "sam@gmail.com", password: "12345" });
        console.log(
            "🚀 ~ file: authentication.test.js:25 ~ act ~ pb.authStore.isValid;",
            pb.authStore.isValid
        );
    });

    await waitFor(() => {
        console.log(
            "🚀 ~ file: authentication.test.js:32 ~ act ~ pb.authStore.isValid;",
            pb.authStore.isValid
        );
        expect(pb.authStore.isValid).toBe(true);
    });
});

// test("logging in a user with PocketBase", async () => {
//     // Clear any existing authentication data
//     pb.authStore.clear();

//     let authData;
//     // Attempt to log in a user with the specified email and password
//     try {
//         authData = await pb
//             .collection("users")
//             .authWithPassword("sam@gmail.com", "12345");
//     } catch (error) {
//         console.log(error);
//     }

//     // Verify that the authentication was successful
//     console.log("Auth data:", authData);
//     expect(pb.authStore.isValid).toBe(true);
// });
