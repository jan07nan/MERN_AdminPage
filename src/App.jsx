import Dashboard from "./Pages/Dashboard";
import Form from "./Pages/Form";
import CreateEmployee from "./Pages/CreateEmployee";
import EmployeeList from "./Pages/EmployeeList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/create-employee" element={<CreateEmployee />}></Route>
      <Route path="/Employee-list" element={<EmployeeList />}></Route>
    </Routes>
  );
}

export default App;
