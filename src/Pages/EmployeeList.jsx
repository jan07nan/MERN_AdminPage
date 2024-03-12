import { useEffect, useState } from "react";
import Logo from "../Components/Logo";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import { getAllusers } from "../api/fetcher";

function EmployeeList() {
  const [ usersData, setUsersData] = useState([]);


  useEffect(() => {
    getAllusers().then((result) => {
      setUsersData(result);
    });
  }, [])
  return (
    <div className="min-h-screen">
      <div>
        <div className=" bg-slate-100 flex justify-between items-center">
          <Logo />
          <Header />
        </div>
        <PageHeader label="Employee List" />
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600">
            Total count: {usersData.length}
          </div>
          <Link to="/create-employee">
            <Button value="Create Employee" />
          </Link>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unique Id
                </th>
                {/* <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th> */}
                <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobile no
                </th>
                <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Designation
                </th>
                <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Create Date
                </th>
                <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {usersData.map((item) => (
                <tr className="border-2 border-slate-400">
                  <td class="px-2 py-4 whitespace-nowrap">{item.UniqueID}</td>
                  {/* <td class="px-2 py-4 whitespace-nowrap">{item.Image}</td> */}
                  <td class="px-2 py-4 whitespace-nowrap">{item.Name}</td>
                  <td class="px-2 py-4 whitespace-nowrap">{item.Email}</td>
                  <td class="px-2 py-4 whitespace-nowrap">{item.Mobile}</td>
                  <td class="px-2 py-4 whitespace-nowrap">{item.Designation}</td>
                  <td class="px-2 py-4 whitespace-nowrap">{item.Gender}</td>
                  <td class="px-2 py-4 whitespace-nowrap">{item.Course}</td>
                  <td class="px-2 py-4 whitespace-nowrap">{item.Date}</td>
                  <td class="px-2 py-4 whitespace-nowrap">
                    
                    <p>Edit</p>
                    <p>Delete</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


export default EmployeeList;
