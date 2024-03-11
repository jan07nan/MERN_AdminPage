import React from "react";
import Logo from "../Components/Logo";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader";
import { InputControl } from "../Components/InputControl";
import Button from "../Components/Button";

function CreateEmployee() {
  return (
    <div className="w-full max-h-screen">
      <div className="bg-slate-100 flex flex-row gap-9 ">
        <Logo />
        <Header />
      </div>
      <PageHeader label="Create Employee" />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <InputControl
          id="name"
          label="Name"
          placeholder="Enter your name"
          required={true}
        />
        <InputControl
          id="email"
          label="Email address"
          placeholder="Enter your email"
          required={true}
        />
        <InputControl
          id="phone"
          label="Mobile no"
          placeholder="Enter your mobile number"
          required={true}
        />
        <div className="flex flex-row mr-6 mt-2">
          <label className="w-64 block text-sm font-medium leading-6 text-gray-900">
            Designation
          </label>

          <select
            name="Designation"
            className=" mr-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: p-2  text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="hr">HR</option>
            <option value="manager">Manager</option>
            <option value="sales">Sales</option>
          </select>
        </div>
        <div className="flex flex-row mr-6 mt-2">
          <label className=" w-36 block text-sm font-medium leading-6 text-gray-900">
            Gender
          </label>
          <div className="text-sm flex flex-row gap-4 ">
            <div>
              <input type="radio" value="Male" />
              <label>Male</label>
            </div>
            <div>
              <input type="radio" value="Female" />
              <label>Female</label>
            </div>
          </div>
        </div>
        <div className="w-100% flex flex-row mr-6 mt-2">
          <label className=" w-32 block text-sm font-medium leading-6 text-gray-900">
            Image Upload
          </label>
          <form className="w-36 ml-2 text-gray-900 shadow-sm placeholder: p-2  text-gray-800 sm:text-sm sm:leading-6">
            <input type="file" id="myFile" name="filename" />
          </form>
        </div>
        <Button value="Submit" />
      </div>
    </div>
  );
}

export default CreateEmployee;
