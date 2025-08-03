import Card from './Card';
import { Link } from 'react-router-dom';
import useMenu from '../hooks/useMenu';

const HomeShowData = () => {
  const [menu, loading] = useMenu();
  if (loading) {
    return (
      <div className='flex justify-center items-center gap-2 w-full min-h-screen'>
        <p className='text-sm md:text-xl font-semibold text-black'>Loading</p>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }
  return (
    <div>
      <h3 className='py-10 text-3xl font-semibold text-center'>All Category data : ({menu.length})</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6'>
        {
          menu.slice(0, 8)?.map((product) => <Card key={product._id} product={product}>

          </Card>)
        }
      </div>
      <Link to="/products">
        <button className='btn btn-primary rounded-full justify-center font-medium items-center flex mx-auto text-sm my-4'>See all products</button>
      </Link>
    </div>
  );
};

export default HomeShowData;