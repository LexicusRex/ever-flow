import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import pb from "lib/pocketbase";
import { Dashboard } from "pages";

export default function ProtectedRoute({ page }) {
    let location = useLocation();
    if (!pb.authStore.isValid) {
        return (
            <Navigate
                to={{ pathname: "/", state: { from: location } }}
                replace
            />
        );
    }
    console.log("AIOSUDHOIASHD");
    return page;
    // Not returning the correct page
    // return <Dashboard />;
}
