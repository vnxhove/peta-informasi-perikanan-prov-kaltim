import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Dasboard/Home";
import AppLayout from "./layouts/AppLayout";
import PdbPages from "./pages/PDB-Pages/PdbPages";
import Bantuan2025 from "./components/tables/Penerima-Bantuan/Bantuan2025";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            {/* Home */}
            <Route index path="/dashboard" element={<Home />} />

            {/* Tables */}
            <Route path="/pdb-perikanan" element={<PdbPages />} />
            <Route
              path="/pokdakan-penerima-bantuan-2025"
              element={<Bantuan2025 />}
            />
          </Route>

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
