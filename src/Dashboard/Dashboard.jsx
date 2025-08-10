import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaBook, FaCalculator, FaCartPlus, FaUsers } from "react-icons/fa6";
import ShareMenu from '../components/ShareMenu';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { MdReviews } from 'react-icons/md';
import { ImSpoonKnife } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";


const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className='grid grid-cols-12'>
      {/* side navbar components */}
      <div className='col-span-3 mx-auto w-full min-h-screen bg-white'>
        <h2 className='text-3xl font-semibold text-black text-center border-b-2 mx-4 pt-4 pb-7'>Marketing</h2>
        <div className='pl-3 pt-3 md:pl-5 lg:pl-8'>
          {
            isAdmin ? <>
              <NavLink to="/dashboard/adminHome" className="flex justify-start items-center gap-2">
                <IoMdHome className='text-sm md:text-2xl ' />
                <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>Admin Home</h2>
              </NavLink>
              <NavLink to="/dashboard/addItems" className="flex justify-start items-center gap-2">
                <ImSpoonKnife className='text-sm md:text-2xl ' />
                <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>Add Items</h2>
              </NavLink>
              <NavLink to="/dashboard/manageItems" className="flex justify-start items-center gap-2">
                <TiThMenu className='text-sm md:text-2xl ' />
                <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>Manage Items</h2>
              </NavLink>
              <NavLink to="/dashboard/manageBookings" className="flex justify-start items-center gap-2">
                <FaBook className='text-sm md:text-2xl ' />
                <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>Manage Bookings</h2>
              </NavLink>
              <NavLink to="/dashboard/allUsers" className="flex justify-start items-center gap-2">
                <FaUsers className='text-sm md:text-2xl ' />
                <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>All Users</h2>
              </NavLink>
            </>
              :
              <>
                <NavLink to="/dashboard/userHome" className="flex justify-start items-center gap-2">
                  <IoMdHome className='text-sm md:text-2xl ' />
                  <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>User Home</h2>
                </NavLink>
                <NavLink to="/dashboard/reservation" className="flex justify-start items-center gap-2">
                  <SlCalender className='text-sm md:text-2xl ' />
                  <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>Reservation</h2>
                </NavLink>
                <NavLink to="/dashboard/paymentHistory" className="flex justify-start items-center gap-2">
                  <RiSecurePaymentFill className='text-sm md:text-2xl ' />
                  <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>Payment history</h2>
                </NavLink>
                <NavLink to="/dashboard/product" className="flex justify-start items-center gap-2">
                  <FaCartPlus className='text-sm md:text-2xl ' />
                  <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>My Product</h2>
                </NavLink>
                <NavLink to="/dashboard/addReview" className="flex justify-start items-center gap-2">
                  <MdReviews className='text-sm md:text-2xl ' />
                  <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>Add Review</h2>
                </NavLink>
                <NavLink to="/dashboard/myBooking" className="flex justify-start items-center gap-2">
                  <FaCalculator className='text-sm md:text-2xl ' />
                  <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>My Booking</h2>
                </NavLink>
              </>
          }
          <div className='border-b-2 md:border-b-4 pt-6 border-gray-600 mr-3 md:mr-5 '></div>
          <ShareMenu></ShareMenu>
        </div>
      </div>
      {/* Main content pages */}
      <div className='col-span-9 w-full pt-5 bg-slate-200 px-5'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;