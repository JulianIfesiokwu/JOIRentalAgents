import { useSelector, useDispatch } from "react-redux";
import ClientDetails from "../components/ClientDetails";
import { useState, useRef, useEffect } from "react";
import { Spinner } from "flowbite-react";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
} from "../redux/user/userSlice.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [formData, setFormData] = useState({});
  const fileref = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const dispatch = useDispatch();

  const { currentUser, loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());

      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      toast("Your account has been updated successfully!");
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDelete = async () => {
    try {
      dispatch(deleteUserStart());

      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      dispatch(deleteUserSuccess());
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },

      (error) => {
        setFileUploadError(true);
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  return (
    <div className='bg-[#141414]'>
      <div className='flex flex-col items-center gap-5 md:gap-[30px] px-4 py-[30px] md:px-20 md:py-4 lg:px-[162px]'>
        <h1 className='absolute-white text-center text-3xl font-semibold my-6'>
          {currentUser.username} Profile
        </h1>
        <form
          className='flex flex-col gap-4 w-2/4'
          onSubmit={handleSubmit}
        >
          <input
            type='file'
            className=''
            ref={fileref}
            hidden
            accept='image/*'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <img
            src={formData.profilePicture || currentUser.profilePicture}
            alt={currentUser.username}
            className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
            onClick={() => {
              fileref.current.click();
            }}
          />
          <p className='text-center my-4 text-sm'>
            {fileUploadError ? (
              <span className='text-red-700'>
                Error uploading image (Image must be less than 2mb)
              </span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span className='text-green-700'>{`Uploading ${filePerc}`}</span>
            ) : filePerc === 100 ? (
              <span className='text-green-700'>
                Image uploaded successfully
              </span>
            ) : (
              ""
            )}
          </p>
          <ClientDetails
            type={"username"}
            placeholder={"Your username"}
            label={"Username"}
            handleChange={handleChange}
            id={"username"}
            defaultValue={currentUser.username}
            value={formData.username}
          />
          <ClientDetails
            type={"email"}
            placeholder={"Enter your email"}
            label={"Email"}
            handleChange={handleChange}
            id={"email"}
            value={formData.email}
            defaultValue={currentUser.email}
          />
          <ClientDetails
            type={"password"}
            placeholder={"Your password"}
            label={"Password"}
            handleChange={handleChange}
            id={"password"}
          />
          <button
            disabled={loading}
            type='submit'
            className='text-sm md:text-base lg:text-[18px] leading-[1.24] font-medium bg-[#703BF7] px-[34px] lg:px-46 py-[14px] lg:py-[18px] rounded-[6px] absolute-white w-full md:w-auto md:shrink-0 hover:opacity-90'
          >
            {loading ? (
              <>
                <Spinner size='sm' />
                {"  "}
                <span>Updating...</span>
              </>
            ) : (
              "Update"
            )}
          </button>
        </form>
        <div className='flex items-center justify-between mt-2 w-1/2'>
          <span
            className='text-red-700 cursor-pointer'
            onClick={handleDelete}
          >
            Delete Account
          </span>
          <span className='text-red-700 cursor-pointer'>Sign out</span>
        </div>
        <p className='absolute-white mt-4'>{error ? error : ""}</p>
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

export default Profile;
