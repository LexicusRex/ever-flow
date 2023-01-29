import React from "react";
import { Navigate } from "react-router-dom";
import pb from "lib/pocketbase";

export default function ProtectedRoute({ page }) {
    if (!pb.authStore.isValid) {
        return <Navigate to="/" />;
    }
    return page;
}
