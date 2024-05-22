import React from "react";

const CreateListing = () => {
  return (
    <main className='bg-[#141414] flex flex-col gap-10 md:gap-[60px] xl:gap-[80px] px-4 md:px-0'>
      <h1 className='text-3xl font-semibold text-center my-7 absolute-white'>
        Create a Listing
      </h1>
      <form className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <input
            type='text'
            placeholder='Name'
            className='border p-3 rounded-lg'
            id='name'
            maxLength='62'
            minLength='10'
            required
          />
          <textarea
            type='text'
            placeholder='Describe the property...'
            className='border p-3 rounded-lg'
            id='description'
            required
          />
          <input
            type='text'
            placeholder='Address'
            className='border p-3 rounded-lg'
            id='address'
            required
          />
          <div className='flex gap-4 flex-wrap items-center'>
            <div className='flex gap-2 items-center'>
              <input
                type='checkbox'
                id='sell'
                className='w-5'
              />
              <span className='absolute-white text-sm'>Sell</span>
            </div>
            <div className='flex gap-2 items-center'>
              <input
                type='checkbox'
                id='Rent'
                className='w-5'
              />
              <span className='absolute-white text-sm'>Rent</span>
            </div>
            <div className='flex gap-2 items-center'>
              <input
                type='checkbox'
                id='parking'
                className='w-5'
              />
              <span className='absolute-white text-sm'>Parking</span>
            </div>
            <div className='flex gap-2 items-center'>
              <input
                type='checkbox'
                id='inspection'
                className='w-5'
              />
              <span className='absolute-white text-sm'>Inspection</span>
            </div>
            <div className='flex gap-2 items-center'>
              <input
                type='checkbox'
                id='furnished'
                className='w-5'
              />
              <span className='absolute-white text-sm'>Furnished</span>
            </div>
            <div className='flex gap-2 items-center'>
              <input
                type='checkbox'
                id='offer'
                className='w-5'
              />
              <span className='absolute-white text-sm'>Offer</span>
            </div>
          </div>
          <div className='flex items-center flex-wrap gap-6'>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='bedrooms'
                min='1'
                max='10'
                className='p-1 border border-gray-300 rounded-lg'
                required
              />
              <span className='absolute-white text-md'>Bedrooms</span>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='bathrooms'
                min='1'
                max='10'
                className='p-1 border border-gray-300 rounded-lg'
                required
              />
              <span className='absolute-white text-md'>Bathrooms</span>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='regularPrice'
                className='p-1 border border-gray-300 rounded-lg'
                required
              />
              <span className='absolute-white text-md'>
                Regular Price (&#8358; / month){" "}
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type='number'
                id='discountedPrice'
                className='p-1 border border-gray-300 rounded-lg'
                required
              />
              <span className='absolute-white text-md'>
                Discounted Price (&#8358; / month)
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 gap-4'>
          <p className='font-semibold text-md absolute-white'>
            Images:
            <span className='font-normal text-xs absolute-white ml-2'>
              The first image will be the cover image (max 6)
            </span>
          </p>
          <div className='flex gap-4'>
            <input
              className='p-3 rounded w-full absolute-white text-sm'
              type='file'
              id='images'
              accept='image/*'
              multiple
            />
            <button
              type='button'
              className='p-3 absolute-white rounded hover:shadow-lg disabled:opacity-80 '
            >
              Upload images
            </button>
          </div>
          <button className='w-full p-3 bg-slate-700 absolute-white rounded-lg hover:opacity-90 disabled:opacity-80'>
            create listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
