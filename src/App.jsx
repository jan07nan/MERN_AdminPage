import Dashboard from "./Pages/Dashboard";
import Form from "./Pages/Form";
import CreateEmployee from "./Pages/CreateEmployee";
import EmployeeList from "./Pages/EmployeeList";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    if(localStorage.getItem('user')) setUser( JSON.parse(localStorage.getItem('user')) ?? null) 
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Form setUser={setUser} />}></Route>
      <Route path="/dashboard" element={<Dashboard user={user} />}></Route>
      <Route path="/create-employee" element={<CreateEmployee />}></Route>
      <Route path="/Employee-list" element={<EmployeeList />}></Route>
    </Routes>
  );
}

export default App;
