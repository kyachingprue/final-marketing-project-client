import React from 'react';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { users, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className='w-full min-h-screen flex justify-center items-center gap-2'>
        <h2 className='text-sm md:text-xl font-medium text-black'>Loading</h2>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (users && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default AdminRoute;