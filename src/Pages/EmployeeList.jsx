import React from "react";
import Logo from "../Components/Logo";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader";

function EmployeeList() {
  return (
    <div>
      <div className="flex flex-row gap-9 mt-4">
        <Logo />
        <Header />
      </div>
      <PageHeader label="Employee List" />
    </div>
  );
}

export default EmployeeList;
