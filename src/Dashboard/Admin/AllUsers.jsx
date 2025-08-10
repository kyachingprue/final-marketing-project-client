import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaDeleteLeft, FaUsers } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users')
      return res.data;
    }
  })
  const handleAddToAdmin = admin => {
    axiosSecure.put(`/users/admin/${admin._id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${admin.name} admin successfully`, {
            autoClose: 2000
          })
        }
      })
  }

  const handleDeleteData = id => {
    axiosSecure.delete(`/users/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          toast.success('user account delete successfully', {
            autoClose: 2000
          })
          refetch();
        }
      })
  }
  return (
    <div className='w-11/12 mx-auto bg-white rounded-xl px-5'>
      <h4 className='text-2xl font-medium text-black py-4 uppercase'>Total Users: {users.length}</h4>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead className='bg-blue-200'>
            <tr>
              <th></th>
              <th className='text-black uppercase'>Name</th>
              <th className='text-black uppercase'>Email</th>
              <th className='text-black uppercase'>Role</th>
              <th className='text-black uppercase'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td className='text-gray-500'>{user.name}</td>
                <td className='text-gray-500' >{user.email}</td>
                <td>
                  {
                    user.role === 'admin' ? <p className='font-bold text-blue-600'>Admin</p> : <button onClick={() => handleAddToAdmin(user)} className='btn btn-accent'>
                      <FaUsers className='text-sm md:text-xl'></FaUsers>
                    </button>
                  }
                </td>
                <td>
                  <button onClick={() => handleDeleteData(user._id)} className='btn btn-accent'>
                    <FaDeleteLeft className='text-sm md:text-xl' />
                  </button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;