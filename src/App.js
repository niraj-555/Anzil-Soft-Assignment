import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./Calculator";
import UserForm from "./UserForm";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/userform" element={<UserForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
