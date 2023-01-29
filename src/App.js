import "./App.css";
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

// Page imports
import {
    LoginPage,
    SignupPage,
    Dashboard,
    Projects,
    CoursesPage,
} from "./pages/index";

import AuthenticatedRoute from "components/authentication/AuthenticatedRoute";

function App({ loginStatus }) {
    // State management for user login
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    const authDashboard = () => {
        return isAuthenticated ? <Dashboard /> : <Navigate to="/login" />;
    };

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            ></link>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LoginPage />} />
                    <Route exact path="/login" element={<LoginPage />} />

                    <Route exact path="/register" element={<SignupPage />} />
                    <Route
                        exact
                        path="/dashboard"
                        element={() => {
                            return isAuthenticated ? (
                                <Dashboard />
                            ) : (
                                <Navigate to="/login" />
                            );
                        }}
                    />

                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/courses" element={<CoursesPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
