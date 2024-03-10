import React from "react";
import Logo from "../Components/Logo";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader";

function Dashboard() {
  return (
    <div>
      <div className="flex flex-row gap-9 mt-4">
        <Logo />
        <Header />
      </div>
      <PageHeader label="Dashboard" />
      <div>
        <h1 className="text-center mt-20 font-medium">Welcome Admin Panal</h1>
      </div>
    </div>
  );
}

export default Dashboard;
