import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";
import pb from "lib/pocketbase";
// export default function ProtectedRoute({ page }) {
//     let location = useLocation();
//     if (!pb.authStore.isValid) {
//         return (
//             <Navigate
//                 to={{ pathname: "/", state: { from: location } }}
//                 replace
//             />
//         );
//     }
//     console.log("AIOSUDHOIASHD");
//     return page;
//     // Not returning the correct page
//     // return <Dashboard />;
// }

const ProtectedRoute = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return pb.authStore.isValid ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};
export default ProtectedRoute;
