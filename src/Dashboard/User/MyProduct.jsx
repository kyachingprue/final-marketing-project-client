import React from 'react';
import useProduct from '../../hooks/useProduct';
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const MyProduct = () => {
  const [product, isLoading, refetch] = useProduct();
  const axiosSecure = useAxiosSecure();

  if (isLoading) {
    return (
      <div className='flex items-center justify-center gap-2 w-full min-h-screen'>
        <p className='text-sm md:text-xl font-medium'>Loading</p>
        <span className="loading loading-spinner loading-md md:loading-lg"></span>
      </div>
    )
  }

  const handleItemDelete = (id, title) => {
    axiosSecure.delete(`/carts/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          console.log()
          toast.success(`${title} deleted successfully`, {
            autoClose: 2000,
          })
          //data update
          refetch();
        }
      })
  }
  // Total price calculate 
  const totalPrice = product.reduce((total, item) => total + item.price, 0)
  return (
    <div className='bg-white rounded-xl p-5 md:p-10 md:mx-10'>
      <div className='flex justify-between items-center'>
        <h3 className='text-sm md:text-2xl font-medium text-black uppercase'>Total Orders: {product.length}</h3>
        <h2 className='text-sm md:text-2xl font-medium text-black uppercase'>Total Price: {totalPrice}Tk</h2>
        <button className='btn btn-primary text-xl'>Pay</button>
      </div>
      <div className='py-5'>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className='bg-blue-200 '>
              <tr>
                <th>
                </th>
                <th className='uppercase text-black'>Product Image</th>
                <th className='uppercase text-black'>Product name</th>
                <th className='uppercase text-black'>Price</th>
                <th className='uppercase text-black text-center'>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                product.map((item, index) => <tr key={item._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.title}
                  </td>
                  <td>{item.price}Tk</td>
                  <td>
                    <button onClick={() => handleItemDelete(item._id, item.title)}>
                      <MdDelete className='text-2xl text-center w-full' />
                    </button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;