import React, { useEffect, useState } from 'react';
import Footer from '../common/Footer';
import HomePageThreeHeader from 'components/common/HomePageThreeHeader';
import HomePage from '../pages/Home/HomePage';
import Loading from '../common/Loading';

function MainLayout() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
           <HomePageThreeHeader />
          <HomePage />
          <Footer className="footer-area mt-110" />
        </>
      )}
    </>
  );
}

export default MainLayout;
