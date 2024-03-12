import { useForm } from "react-hook-form";
import dealsdray from "../Images/dealsdray.jpg";
import { InputControl } from "../Components/InputControl";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../api/fetcher";

function Form({ setUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const  res = await login({
      username : data.username,
      password : data.password
    });
    setUser(res);
    localStorage.setItem('user', (res));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
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
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <InputControl
              id="email"
              label="Username"
              placeholder="Enter your UserName"
              register={register("username", {
                required: "Required",
              })}
              error={errors.username?.message}
              touched={!!errors.username}
            />
            <div>
              <InputControl
                type="password"
                id="password"
                label="Password"
                placeholder="Enter your password"
                register={register("password", { required: "Required" })}
                error={errors.password?.message}
                touched={!!errors.password}
              />
            </div>
            <div>
              <Button value="Sign In" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
