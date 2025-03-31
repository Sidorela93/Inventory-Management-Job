import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobsiteStats from "./components/JobsiteStats";
import JobsiteTable from "./components/JobsiteTable";
import JobsiteHeader from "./components/JobsiteHeader";
import InventoryPage from "./components/InventoryPage";
import Title from "./components/Title"; // Importo komponentin Title
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <JobsiteStats />
                <Title text="Tittle" /> {/* Vendoset këtu poshtë JobsiteStats */}
                <JobsiteHeader />
                <JobsiteTable />
              </>
            } 
          />
          
          <Route path="/inventory/:jobsiteId" element={<InventoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
