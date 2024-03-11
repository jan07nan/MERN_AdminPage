import React from "react";
import Logo from "../Components/Logo";
import Header from "../Components/Header";
import PageHeader from "../Components/PageHeader";
import { InputControl } from "../Components/InputControl";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SelectControl from "../Components/SelectControl";
import RadioControl from "../Components/RadioControl";

function CreateEmployee() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
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
            id="name"
            label="Name"
            placeholder="Enter your name"
            register={register("name", { required: "Required" })}
            error={errors.name?.message}
            touched={!!errors.name}
          />
          <InputControl
            id="email"
            label="Email address"
            placeholder="Enter your email"
            register={register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            error={errors.email?.message}
            touched={!!errors.email}
          />
          <InputControl
            id="phone"
            label="Mobile no"
            placeholder="Enter your mobile number"
            register={register("phone", { required: "Required" })}
            error={errors.phone?.message}
            touched={!!errors.phone}
          />
          <SelectControl
            id="Department"
            label="Department"
            placeholder="Select Department"
            register={register("department", { required: "Required" })}
            error={errors.department?.message}
            touched={!!errors.department}
          />
          <RadioControl
            id="gender"
            label="gender"
            placeholder="Select gender"
            register={register("gender", { required: "Required" })}
            error={errors.gender?.message}
            touched={!!errors.gender}
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
        </div>
      </form>
    </div>
  );
}

export default CreateEmployee;
