import React from "react";
import dealsdray from "../Images/dealsdray.jpg";
import { InputControl } from "../Components/InputControl";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

function Form() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-14 w-auto"
          src={dealsdray}
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <InputControl
              id="email"
              label="Email address"
              placeholder="Enter your email"
              required={true}
            />
            <div>
              <InputControl
                type="password"
                id="password"
                label="Password"
                placeholder="Enter your password"
                required={true}
              />
            </div>
            <div>
              <Link to="/dashboard">
                <Button value="Sign In" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
