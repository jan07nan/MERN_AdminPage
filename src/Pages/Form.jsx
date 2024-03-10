import React from "react";
import dealsdray from "../Images/dealsdray.jpg";
import { InputControl } from "../Components/InputControl";
import Button from "../Components/Button";

function form() {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-14 w-auto"
            src={dealsdray}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
              <Button />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default form;
