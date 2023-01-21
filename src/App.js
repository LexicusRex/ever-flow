import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page imports
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>}/>
                    <Route exact path="/register" element={<SignupPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
