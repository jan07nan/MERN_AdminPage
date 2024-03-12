import React, { useState } from "react";
import Logo from "../Components/Logo";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader";
import { InputControl } from "../Components/InputControl";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SelectControl from "../Components/SelectControl";
import RadioControl from "../Components/RadioControl";
import { createNewUser } from "../api/fetcher";

function CreateEmployee() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const onSubmit = async (data) => {
   try{
    setErr(null);
    const res = await createNewUser({ ...data, Date : new Date().toISOString().slice(0, 10) });
    console.log(res);
    navigate('/Employee-list')
   }
   catch(err) {
    setErr(err?.response?.data?.message ?? err?.message);
   }
  };

  return (
    <div className="w-full max-h-screen">
      <div className="bg-slate-100 flex flex-row gap-9 ">
        <Logo />
        <Header />
      </div>
      <PageHeader label="Create Employee" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <InputControl
            id="uniqueID"
            label="uniqueID"
            placeholder="Enter your UniqueID"
            register={register("UniqueID", { required: "Required" })}
            error={errors.UniqueID?.message}
            touched={!!errors.UniqueID}
          />
          <InputControl
            id="name"
            label="Name"
            placeholder="Enter your name"
            register={register("Name", { required: "Required" })}
            error={errors.Name?.message}
            touched={!!errors.Name}
          />
          <InputControl
            id="email"
            label="Email address"
            placeholder="Enter your email"
            register={register("Email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            error={errors.Email?.message}
            touched={!!errors.Email}
          />
          <InputControl
            id="phone"
            label="Mobile no"
            placeholder="Enter your mobile number"
            register={register("Mobile", { required: "Required" })}
            error={errors.Mobile?.message}
            touched={!!errors.Mobile}
          />
          <SelectControl
            id="Department"
            label="Department"
            placeholder="Select Department"
            register={register("Designation", { required: "Required" })}
            error={errors.Designation?.message}
            touched={!!errors.Designation}
          />
          <RadioControl
            id="gender"
            label="gender"
            placeholder="Select gender"
            register={register("Gender", { required: "Required" })}
            error={errors.Gender?.message}
            touched={!!errors.Gender}
          />
                  <InputControl
            id="phone"
            label="Course"
            placeholder="Enter Course"
            register={register("Course", { required: "Required" })}
            error={errors.Course?.message}
            touched={!!errors.Course}
          />
            <InputControl
            id="Password"
            label="Password"
            placeholder="Enter Password"
            register={register("Password", { required: "Required" })}
            error={errors.Password?.message}
            touched={!!errors.Password}
          />
          <div className="w-100% flex flex-row mr-6 mt-2">
            <label className=" w-32 block text-sm font-medium leading-6 text-gray-900">
              Image Upload
            </label>
            <form className="w-36 ml-2 text-gray-900 shadow-sm placeholder: p-2  text-gray-800 sm:text-sm sm:leading-6">
              <input type="file" id="myFile" name="filename" />
            </form>
          </div>
          <Button value="Submit" />
          {err && <p className="text-red-700 ">{err}</p>}
        </div>
      </form>
    </div>
  );
}

export default CreateEmployee;
