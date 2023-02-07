import { useContext, useEffect } from 'react';

import LayoutWrapper from 'components/layout/LayoutWrapper';
import HomePage from 'components/pages/Home/HomePage';
import {
  getTourPackages,
  getTourGuides,
  getBlogs,
  getDestinations,
} from '../src/mock-api';
import { MockContext } from '../src/context';

const MainPage = (props) => {
  const { dispatch } = useContext(MockContext);

  useEffect(() => {
    if (props?.tours)
      dispatch({
        type: 'SET_TOURS',
        payload: props.tours,
      });
    if (props?.tourGuides)
      dispatch({
        type: 'SET_TOUR_GUIDES',
        payload: props.tourGuides,
      });
    if (props?.blogs)
      dispatch({
        type: 'SET_BLOGS',
        payload: props.blogs,
      });
    if (props?.destinations)
      dispatch({
        type: 'SET_DESTINATIONS',
        payload: props.destinations,
      });
  }, [props]);
  return (
    <>
      <LayoutWrapper>
        <HomePage />
      </LayoutWrapper>

      {/* <Header />
      <PackageDetailsPage />
      <Footer className="footer-area mt-110" /> */}
    </>
  );
};

export async function getServerSideProps() {
  const tours = await getTourPackages();
  console.log(tours);
  const tourGuides = await getTourGuides();
  const blogs = await getBlogs();
  const destinations = await getDestinations();

  return {
    props: {
      tours,
      tourGuides,
      blogs,
      destinations,
    },
  };
}

export default MainPage;
