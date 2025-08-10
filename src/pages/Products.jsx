import banner from '../assets/images/(1)banner_image.jpg'
import OrderTab from '../hooks/OrderTab';
import useMenu from '../hooks/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProduct from '../hooks/useProduct';

const Products = () => {
  const [menu, loading] = useMenu();
  const [, , refetch] = useProduct();
  if (loading) {
    return (
      <div className='flex justify-center items-center gap-2 w-full min-h-screen'>
        <p className='text-sm md:text-xl font-semibold text-black'>Loading</p>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  const phone = menu.filter(product => product.category === 'phone');
  const watch = menu.filter(product => product.category === 'watch');
  const bike = menu.filter(product => product.category === 'bike');
  const computer = menu.filter(product => product.category === 'computer');
  const laptop = menu.filter(product => product.category === 'laptop');
  const car = menu.filter(product => product.category === 'car');
  return (
    <div>
      <article>
        <title>Marketing || Product</title>
      </article>
      <div className='w-full lg:min-h-screen mt-24 md:mt-22 mx-auto'>
        <img className='w-full h-full' src={banner} alt="" />
      </div>
      <div className='text-center pt-6 md:pt-22 w-10/12 mx-auto'>
        <h3 className='text-3xl font-semibold py-7'>All Products</h3>
        <p className='text-gray-600 text-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure consequatur doloribus fugiat ex, beatae deserunt? Sapiente esse alias veritatis animi dolorum velit amet dolor. Perspiciatis voluptatem rem est aspernatur quisquam.</p>
      </div>
      <Tabs className="w-full mx-auto py-5 px-6">
        <TabList className="flex-wrap md:flex justify-around items-center py-4 my-2">
          <Tab>SmartPhone</Tab>
          <Tab>SmartWatch</Tab>
          <Tab>Computer</Tab>
          <Tab>Brand Car</Tab>
          <Tab>Laptop</Tab>
          <Tab>Bike</Tab>
        </TabList>

        <TabPanel>
          <OrderTab products={phone} refetch={refetch}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab products={watch} refetch={refetch}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab products={computer} refetch={refetch}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab products={car} refetch={refetch}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab products={laptop} refetch={refetch}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab products={bike} refetch={refetch}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Products;