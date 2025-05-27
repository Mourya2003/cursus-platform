import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import './index.css'
function App() {
 return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
