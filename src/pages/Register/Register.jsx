import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then(() => console.log("Registration successful"))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="p-5 min-h-[calc(100vh-96px)] flex flex-col items-center justify-center">
      <div className="sm:min-w-[570px] border-2 border-slate-200 rounded p-5">
        <h3 className="text-2xl font-bold">Create an account</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-5">
          <input
            type="text"
            name="firstName"
            className="w-full border-b-2 placeholder:text-black p-2 border-slate-200 outline-none text-base font-medium"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            className="w-full border-b-2 placeholder:text-black p-2 border-slate-200 outline-none text-base font-medium"
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            className="w-full border-b-2 placeholder:text-black p-2 border-slate-200 outline-none text-base font-medium"
            placeholder="Username or email"
          />
          <input
            type="password"
            name="password"
            className="w-full border-b-2 placeholder:text-black p-2 border-slate-200 outline-none text-base font-medium"
            placeholder="Password"
          />
          <input
            type="password"
            name="confirmPassword"
            className="w-full border-b-2 placeholder:text-black p-2 border-slate-200 outline-none text-base font-medium"
            placeholder="Confirm Password"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm gap-1 font-medium">
              <input type="checkbox" name="checkbox" id="" />
              <p>Remember me</p>
            </div>
            <a href="#" className="font-medium text-sm text-primary underline">
              Forget password
            </a>
          </div>
          <button
            type="submit"
            className="text-base font-bold bg-primary p-3 rounded cursor-pointer"
          >
            Create an account
          </button>
          <div>
            <p
              className="text-base font-medium mb-6 text-center
            "
            >
              Already have an account?
              <Link to={"/login"} className="text-primary underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div>
        <div className="divider">
          <span className="text-base font-bold">Or</span>
        </div>

        <div className="my-6 space-y-3">
          {/* GitHub */}
          <button className="btn bg-white text-black border-[#e5e5e5] w-full rounded-full">
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
            Login with GitHub
          </button>

          {/* Google */}
          <button className="btn bg-white text-black border-[#e5e5e5] w-full rounded-full">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
