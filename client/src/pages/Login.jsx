import { Spinner } from "flowbite-react";
import ClientDetails from "../components/ClientDetails";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.id === "email" || e.target.id === "password") {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data));
      if (res.ok) {
        toast("Logged in successfully!");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='bg-[#141414]'>
      <div className='flex flex-col md:flex-row items-center gap-5 md:gap-[50px] px-4 py-[30px] md:px-20 md:py-16 lg:px-[162px]'>
        <form
          onSubmit={handleSubmit}
          className='w-full md:basis-1/2 md:mx-auto flex flex-col md:flex-row flex-wrap rounded-[12px] gap-5 md:gap-10 lg:gap-[40px] p-4 md:py-[40px] lg:py-[50px]'
        >
          <div className='md:flex md:flex-col gap-[20px] md:w-full'>
            <div className='flex flex-col md:flex-row md:justify-between w-full gap-5 md:gap-[30px]'>
              <ClientDetails
                type={"email"}
                placeholder={"Enter your email"}
                label={"Email"}
                handleChange={handleChange}
                id={"email"}
                value={formData.email}
              />
            </div>
            <div className='flex flex-col md:flex-row md:justify-between w-full mt-5 md:mt-0 md:gap-[30px]'>
              <ClientDetails
                type={"password"}
                placeholder={"Your password"}
                label={"Password"}
                handleChange={handleChange}
                id={"password"}
              />
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between mt-5 md:mt-0 gap-5 lg:gap-[50px] w-full'>
              <button
                type='submit'
                className='text-sm md:text-base lg:text-[18px] leading-[1.24] font-medium bg-[#703BF7] px-[34px] lg:px-46 py-[14px] lg:py-[18px] rounded-[6px] absolute-white w-full md:w-auto md:shrink-0'
              >
                {loading ? (
                  <>
                    <Spinner size='sm' />
                    {"  "}
                    <span>Logging in...</span>
                  </>
                ) : (
                  "Login"
                )}
              </button>
              <OAuth />
            </div>
            <p className='absolute-white text-sm font-medium'>{error}</p>
          </div>
          <p className='absolute-white text-sm font-medium'>
            Dont have an account?{" "}
            <Link
              to='/signup'
              href=''
              className='text-[#703BF7]'
            >
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={true}
        theme='light'
      />
    </div>
  );
};

export default Login;
