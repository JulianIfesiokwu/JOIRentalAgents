import { useSelector } from "react-redux";
import ClientDetails from "../components/ClientDetails";
import { useState } from "react";
import { Spinner } from "flowbite-react";

const Profile = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const currentUser = useSelector((state) => state.user);
  console.log(currentUser.currentUser);

  const handleChange = (e) => {
    if (e.target.id === "email" || e.target.id === "password") {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  return (
    <div className='bg-[#141414]'>
      <div className='flex flex-col items-center gap-5 md:gap-[30px] px-4 py-[30px] md:px-20 md:py-4 lg:px-[162px]'>
        <h1 className='absolute-white text-center text-3xl font-semibold my-6'>
          {currentUser.currentUser.username} Profile
        </h1>
        <form className='flex flex-col gap-4 w-2/4'>
          <img
            src={currentUser.profilePicture}
            alt={currentUser.username}
            className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
          />
          <ClientDetails
            type={"username"}
            placeholder={"Your username"}
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
          <ClientDetails
            type={"password"}
            placeholder={"Your password"}
            label={"Password"}
            handleChange={handleChange}
            id={"password"}
          />
          <button
            type='submit'
            className='text-sm md:text-base lg:text-[18px] leading-[1.24] font-medium bg-[#703BF7] px-[34px] lg:px-46 py-[14px] lg:py-[18px] rounded-[6px] absolute-white w-full md:w-auto md:shrink-0'
          >
            {loading ? (
              <>
                <Spinner size='sm' />
                {"  "}
                <span>Updating...</span>
              </>
            ) : (
              "Update your profile"
            )}
          </button>
        </form>
        <div className='flex items-center justify-between mt-2 w-1/2'>
          <span className='text-red-700 cursor-pointer'>Delete Account</span>
          <span className='text-red-700 cursor-pointer'>Sign out</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
