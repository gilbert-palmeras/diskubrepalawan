import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import HomePageThreeHeader from "components/common/HomePageThreeHeader";

import Loading from "../common/Loading";
function LayoutWrapper({children,data}) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(false);
  }, []);
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
          <HomePageThreeHeader />
          {/* <Header data={data} /> */}
          {children}
          <Footer className="footer-area mt-110" />
        </>
      )}
    </>
  );
}

export default LayoutWrapper;
