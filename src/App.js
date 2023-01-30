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

import ProtectedRoute from "components/authentication/ProtectedRoute";
import Layout from "components/Layout";

function App() {
    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            ></link>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/register" element={<SignupPage />} />

                    {/* Protected routes */}
                    <Route element={<ProtectedRoute />}>
                        <Route
                            exact
                            path="/dashboard"
                            element={<Dashboard />}
                        />
                        <Route exact path="/projects" element={<Projects />} />
                    </Route>
                    {/* <Route path="*" element={<Missing />} /> */}
                </Route>
                {/* <Route exact path="/" element={<LoginPage />} />
                    <Route exact path="/login" element={<LoginPage />} />

                    <Route exact path="/register" element={<SignupPage />} />
                    <Route
                        exact
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        exact
                        path="/projects"
                        element={
                            <ProtectedRoute>
                                <Projects />
                            </ProtectedRoute>
                        }
                    />
                    <Route exact path="/courses" element={<CoursesPage />} /> */}
            </Routes>
        </div>
    );
}

export default App;
