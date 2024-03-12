import React from "react";
import Logo from "../Components/Logo";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader";

function Dashboard({ user }) {
  return (
    <div>
      <div className="bg-slate-100 flex flex-row gap-9">
        <Logo />
        <Header user={user} />
      </div>
      <PageHeader label="Dashboard" />
      <div>
        <h1 className="text-center mt-20 font-medium max-h-screen">
          Welcome to Admin Panal
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
