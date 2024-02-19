import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [showTop, setShowTop] = useState(true);
  const path = useLocation.pathname;
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate("/contact-us");
  };

  return (
    <>
      {showTop && (
        <div className='flex items-center justify-between md:justify-center bg-headerBackground bg-no-repeat bg-cover bg-[#1a1a1a] bg-center pt-10 pb-5 px-4 pb-md:px-20 md:py-[14px] relative'>
          <p className='text-center leading-[150%] text-xs md:text-sm absolute-white'>
            ✨Discover Your Dream Property with JOIEstateAgents
            <span className='ml-0.5 md:ml-2'>Learn More</span>
          </p>
          <button
            type='button'
            onClick={() => setShowTop(!showTop)}
            className='self-end p-1 rounded-full bg-slate-400 opacity-90 mt-3 md:mt-0 inset-left'
          >
            <img
              src='/src/assets/close-icon.svg'
              className='text-white'
            />
          </button>
        </div>
      )}
      <Navbar className='bg-[#1a1a1a] md:px-20 md:py-[14px]'>
        <Navbar.Brand href='#'>
          <picture>
            <source
              srcSet='/src/assets/desktop-logo.svg'
              media='(min-width: 769px)'
            ></source>
            <source
              srcSet='/src/assets/laptop-logo.svg'
              media='(min-width: 600px)'
            ></source>
            <img
              src='/src/assets/mobile-logo.svg'
              alt='JOI logo'
            />
          </picture>
        </Navbar.Brand>
        <div className='flex md:order-2 '>
          <Button
            className='hidden md:inline absolute-white bg-[#141414] text-sm leading-[150%] font-normal'
            onClick={handleContactUs}
          >
            Contact Us
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className='h-screen sm:h-auto'>
          <Navbar.Link
            active={path === "/"}
            as={"div"}
            className='absolute-white mb-4 md:mb-0 border-none text-sm leading-[150%] font-normal'
          >
            <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link
            active={path === "/about"}
            as={"div"}
            className='absolute-white mb-4 md:mb-0 border-none text-sm leading-[150%] font-normal'
          >
            <Link to='/about'>About</Link>
          </Navbar.Link>
          <Navbar.Link
            active={path === "/properties"}
            as={"div"}
            className='absolute-white mb-4 md:mb-0 border-none text-sm leading-[150%] font-normal'
          >
            <Link to='/properties'>Properties</Link>
          </Navbar.Link>
          <Navbar.Link
            active={path === "/services"}
            as={"div"}
            className='absolute-white mb-4 md:mb-0 border-none text-sm leading-[150%] font-normal'
          >
            <Link to='/services'>Services</Link>
          </Navbar.Link>
          <Button
            type='button'
            className='md:hidden absolute-white inline bg-[#141414] text-sm leading-[150%] font-normal'
            onClick={handleContactUs}
          >
            Contact Us
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;