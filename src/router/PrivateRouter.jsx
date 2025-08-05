import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const { users, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className='w-full min-h-screen flex justify-center items-center gap-2'>
        <h2 className='text-sm md:text-xl font-medium text-black'>Loading</h2>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (users) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;