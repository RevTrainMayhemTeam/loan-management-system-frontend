import { BrowserRouter as Router, Routes, Route } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { Dashboard } from "./pages/DashboardPage";
import UserProfile from "./components/UserProfile";
import "./App.css"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path= "/dashboard/userprofile" element ={<UserProfile/>} />
      </Routes>
    </Router>
  );
};
