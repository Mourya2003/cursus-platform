

// import React from "react";
// import AppRoutes from "./routes/AppRoutes";
// import "./index.css";

// function App() {
//   return <AppRoutes />;
// }

// export default App;

import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { EnrolledCoursesProvider } from "./components/EnrolledCoursesContext";
import "./index.css";

function App() {
  return (
    <EnrolledCoursesProvider>
      <AppRoutes />
    </EnrolledCoursesProvider>
  );
}

export default App;
