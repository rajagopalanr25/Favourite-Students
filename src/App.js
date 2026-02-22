import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import StudentListPage from "./pages/StudentListPage";
import FavouritesPage from "./pages/FavouritesPage";
import "./styles.css";

export default function App() {
  return (
    <StudentProvider>
      <Router>
        <nav className="nav">
          <div className="nav-brand"> StudentFaves</div>

          <div className="nav-links">
            <NavLink to="/" end className="nav-link">
              Student List
            </NavLink>

            <NavLink to="/favourites" className="nav-link">
              Favourites
            </NavLink>
          </div>
        </nav>

        <main className="main fade-page">
          <Routes>
            <Route path="/" element={<StudentListPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </main>
      </Router>
    </StudentProvider>
  );
}