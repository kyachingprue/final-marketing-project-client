import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import LatestBlogs from '../components/LatestBlogs';
import HomeShowData from '../components/HomeShowData';

const Home = () => {
  return (
    <div>
      <article>
        <title>Marketing || Home</title>
      </article>
      <Header></Header>
      <CartItem></CartItem>
      <LatestBlogs></LatestBlogs>
      <HomeShowData></HomeShowData>
    </div>
  );
};

export default Home;