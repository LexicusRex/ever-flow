import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

test("renders learn react link", () => {
    render(
        <Router>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </Router>
    );
    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
});
