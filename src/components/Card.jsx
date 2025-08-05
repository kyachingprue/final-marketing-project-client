import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useProduct from "../hooks/useProduct";

const Card = ({ product }) => {
  const { _id, title, description, price, image, category } = product;
  const { users } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useProduct();

  const handleAddToDashboard = () => {
    if (users && users?.email) {
      // send to the database
      const cartItem = {
        menuId: _id,
        email: users.email,
        title,
        image,
        price
      }
      // Axios use send via post
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          if (res.data.insertedId) {
            toast.success(`${title} added successfully`, {
              position: "top-center",
              autoClose: 2000,
            })
            // data update via refetch
            refetch();
          }
        })

    }
    else {
      toast.info('please sign in', {
        position: "top-center",
        autoClose: 2000,
      })
      navigate('/login', { state: { from: location } });
    }
  }
  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow border border-gray-300 text-sm max-w-96">
        <div>
          <img className="rounded-md max-h-48 w-full object-cover" src={image} alt="officeImage" />
        </div>
        <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">{title}</p>
        <p className="text-gray-500 mt-3 ml-2">{description}</p>
        <p className='text-gray-500 mt-3 ml-2'>Category : {category}</p>
        <p className='text-gray-500 mt-3 ml-2'>Price : {price}Tk</p>
        <button onClick={() => handleAddToDashboard(product)} type="button" className="bg-indigo-600 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white">Add to Card</button>
      </div>
    </div>
  );
};

export default Card;