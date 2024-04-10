import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ClientDetails from "../components/ClientDetails";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const userCreated = () => {
    toast("Your account has been created");

    toast.success("Success Notification !", {
      position: "top-center",
    });
  };

  const handleChange = (e) => {
    if (
      e.target.id === "username" ||
      e.target.id === "email" ||
      e.target.id === "password"
    ) {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setLoading(false);
        return;
      }

      if (res.ok) {
        toast("Account created successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className='bg-[#141414]'>
      <div className='flex flex-col md:flex-row items-center md:justify-between gap-5 md:gap-[50px] px-4 py-[50px] md:px-20 md:py-20 lg:px-[162px]'>
        <picture className='basis-1/2'>
          <source
            srcSet='/src/assets/about-landing-desktop.svg'
            media='(min-width: 769px)'
          ></source>
          <source
            srcSet='/src/assets/about-landing-laptop.svg'
            media='(min-width: 600px)'
          ></source>
          <img
            src='/src/assets/about-landing.svg'
            alt=''
            className='object-cover'
          />
        </picture>
        <form
          onSubmit={handleSubmit}
          className='w-full md:basis-1/2 flex flex-col md:flex-row flex-wrap rounded-[12px] gap-5 md:gap-10 lg:gap-[40px] p-4 md:py-[40px] lg:py-[50px]'
        >
          <div className='md:flex md:flex-col gap-[30px] items-center md:w-full'>
            <div className='flex flex-col md:flex-row md:justify-between w-full gap-5 md:gap-[30px]'>
              <ClientDetails
                type={"text"}
                placeholder={"Enter your username"}
                label={"Username"}
                handleChange={handleChange}
                id={"username"}
                value={formData.username}
              />
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
              <div className='flex items-center justify-between gap-[6px] lg:gap-[10px]'>
                <input
                  type='checkbox'
                  placeholder=''
                  value={termsAccepted}
                  onClick={() => setTermsAccepted(!termsAccepted)}
                />
                <p className='text-sm md:text-base font-medium leading-[1.5] text-[#999999]'>
                  I agree with <a className='underline'>Terms of Use</a> and{" "}
                  <a className='underline'>Privacy Policy</a>
                </p>
              </div>
              <button
                type='submit'
                className='text-sm md:text-base lg:text-[18px] leading-[1.24] font-medium bg-[#703BF7] px-[34px] lg:px-46 py-[14px] lg:py-[18px] rounded-[6px] absolute-white w-full md:w-auto md:shrink-0'
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={true}
        theme='dark'
      />
    </div>
  );
};

export default SignUp;