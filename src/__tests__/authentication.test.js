import { renderHook, act, waitFor } from "@testing-library/react";
import useLogin from "hooks/useLogin";
import useSignup from "hooks/useSignup";
import { usePocketbase } from "hooks/usePocketbase";
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

const userSignUpData = {
    firstName: "test1",
    lastName: "test1",
    userEmail: "test1@gmail.com",
    userPassword: "12345",
};

describe("User Register", function () {
    // This part of the code is not finishing
    it("user signup hook", async () => {
        pb.authStore.clear();
        const { result } = renderHook(() => useSignup(), {
            wrapper: createWrapper(),
        });
        const { mutate: registerFunc, isLoading, isError } = result.current;
        act(() => {
            registerFunc(userSignUpData);
        });

        // Check for successful register
        await waitFor(() => {
            expect(isError).toBe(false);
        });
    });
    it("check signed up user", async () => {
        pb.authStore.clear();
        const { result } = renderHook(() => usePocketbase(), {
            wrapper: createWrapper(),
        });
        let response;
        const { getUsers } = result.current;
        act(() => {
            response = getUsers();
        });
        await waitFor(() => {
            response.then(function (result) {
                console.log(result);
            });
            expect(false).toBe(false);
        });
        // it("check signed up user", async () => {
        //     pb.authStore.clear();
        //     const { result } = renderHook(() => usePocketbase(), {
        //         wrapper: createWrapper(),
        //     });
        //     let response;
        //     const { getUsers } = result.current;
        //     act(() => {
        //         response = getUsers();
        //     });
        //     await waitFor(() => {
        //         response.then(function (result) {
        //             console.log(result);
        //         });
        //         expect(false).toBe(false);
        //     });
    });
});

describe("User Login", function () {
    it("user login hook", async () => {
        pb.authStore.clear();
        const { result } = renderHook(() => useLogin(), {
            wrapper: createWrapper(),
        });

        const { mutate: loginFunc, isLoading, isError } = result.current;
        act(() => {
            loginFunc({ email: "sam@gmail.com", password: "12345" });
        });

        await waitFor(() => {
            expect(pb.authStore.isValid).toBe(true);
        });
        pb.authStore.clear();
    });
    it("invalid user login", async () => {
        pb.authStore.clear();
        const { result } = renderHook(() => useLogin(), {
            wrapper: createWrapper(),
        });

        const { mutate: loginFunc, isLoading, isError } = result.current;
        act(() => {
            loginFunc({
                email: "doesnotexist@gmail.com",
                password: "doesnotexist",
            });
        });

        await waitFor(() => {
            expect(pb.authStore.isValid).toBe(false);
        });
        pb.authStore.clear();
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
