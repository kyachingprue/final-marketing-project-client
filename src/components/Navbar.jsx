import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/images/earth.png'
import image from '../assets/images/letter-m (2).png'
import useAuth from '../hooks/useAuth';
import useProduct from '../hooks/useProduct';


const Navbar = () => {
  const { users, userLogout } = useAuth();
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [product] = useProduct();

  const toggleDropDown = () => {
    setDropDownOpen(prev => !prev);
  }

  const handleLogout = () => {
    userLogout()
      .then(() => {
        console.log('user logout successfully');
      })
      .catch(error => {
        console.log(error.message)
      })
    setDropDownOpen(false);
  }


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div>
        <nav className={`fixed top-0 left-0 bg-indigo-500 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

          {/* Logo */}
          <a href="https://prebuiltui.com" className="flex items-center gap-2">
            <img src={icon} alt="logo" className={`h-7 w-7 md:h-14 md:w-14 ${isScrolled && "invert opacity-80"}`} />
            <div className='flex items-center '>
              <img className='w-5 md:w-10' src={image} alt="M logo image" />
              <h3 className='text-sm md:text-2xl font-bold'>arketing</h3>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link, i) => (
              <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                {link.name}
                <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
              </a>
            ))}
            <div className='relative'>
              <Link to="/dashboard">
                <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                  Dashboard
                </button>
                <div className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500">
                  <p className="text-xs text-white">{product?.length}</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-4">
            <svg className={`h-6 w-6 text-white transition-all duration-500 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            {
              users ? <>
                <div className='relative'>
                  <img
                    onClick={toggleDropDown}
                    src={users?.photoURL}
                    className={`w-10 md:w-12 h-10 md:h-12 rounded-full cursor-pointer border-2 border-gray-400`}
                    alt="user image" />
                  {
                    dropDownOpen && (
                      <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50'>
                        <Link to="/" onClick={() => setDropDownOpen(false)} className='block py-2 px-4 hover:bg-gray-300'>
                          Home
                        </Link>
                        <Link to="/profile" onClick={() => setDropDownOpen(false)} className='block py-2 px-4 hover:bg-gray-300'>
                          Profile
                        </Link>
                        <Link to="/dashboard" onClick={() => setDropDownOpen(false)} className='block py-2 px-4 hover:bg-gray-300'>
                          Dashboard
                        </Link>
                        <button onClick={handleLogout} className='block py-2 px-4 hover:bg-gray-300'>
                          Logout
                        </button>
                      </div>
                    )
                  }
                </div>
              </>
                :
                <Link to="/login">
                  <button className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                    Login
                  </button>
                </Link>
            }
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </div>

          {/* Mobile Menu */}
          <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {navLinks.map((link, i) => (
              <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}

            <div className='relative'>
              <Link to="/dashboard">
                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                  Dashboard
                </button>
                <div className="absolute -top-2 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-blue-500">
                  <p className="text-xs text-white">{product?.length}</p>
                </div>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;