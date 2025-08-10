import React from 'react';
import Card from '../components/Card';

const OrderTab = ({ products, refetch }) => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6'>
        {
          products.map(product => <Card key={product._id} product={product} refetch={refetch}></Card>)
        }
      </div>
    </div>
  );
};

export default OrderTab;