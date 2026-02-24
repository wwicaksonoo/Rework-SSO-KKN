import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Profile from "./pages/profile";
import Desa from "./pages/desa";
import Logbook from "./pages/logbook";

function App() {
    return (
        <div className="h-screen flex overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Navbar />

                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/desa" element={<Desa />} />
                        <Route path="/logbook" element={<Logbook />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
