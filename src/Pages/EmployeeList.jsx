import React from "react";
import Logo from "../Components/Logo";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

function EmployeeList() {
  const Data = [
    {
      Unique_id: "1",
      Image: "asdfgh",
      Name: "Jan",
      Email: "hai@gmail.com",
      Mobile: 1234567890,
      Des: "HR",
      Gender: "Female",
      Course: "CSE",
      Createdate: "10-03-2024",
      Action: "Edit-Delete",
    },
    {
      Unique_id: "1",
      Image: "asdfgh",
      Name: "Jan",
      Email: "hai@gmail.com",
      Mobile: 1234567890,
      Des: "HR",
      Gender: "Female",
      Course: "CSE",
      Createdate: "10-03-2024",
      Action: "Edit-Delete",
    },
    {
      Unique_id: "1",
      Image: "asdfgh",
      Name: "Jan",
      Email: "hai@gmail.com",
      Mobile: 1234567890,
      Des: "HR",
      Gender: "Female",
      Course: "CSE",
      Createdate: "10-03-2024",
      Action: "Edit-Delete",
    },
    {
      Unique_id: "1",
      Image: "asdfgh",
      Name: "Jan",
      Email: "hai@gmail.com",
      Mobile: 1234567890,
      Des: "HR",
      Gender: "Female",
      Course: "CSE",
      Createdate: "10-03-2024",
      Action: "Edit-Delete",
    },
  ];
  return (
    <div>
      <div className="flex flex-row gap-9 mt-4">
        <Logo />
        <Header />
      </div>
      <PageHeader label="Employee List" />
      <div className="flex flex-row gap-x-28 float-right">
        <p>Total count:</p>
        <Link to="/create-employee">
          <Button value="Create Employee" />
        </Link>
      </div>
      <div>
        <table className="mt-4 min-w-full border-2 ml-2  divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Unique Id
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile no
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Designation
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Create Date
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {Data.map((item) => (
              <tr className="border-2 border-slate-400">
                <td class="px-6 py-4 whitespace-nowrap">{item.Unique_id}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.Image}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.Name}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.Email}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.Mobile}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.Des}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.Gender}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.Course}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.Createdate}</td>
                <td class="px-6 py-4 whitespace-nowrap">{item.Action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
