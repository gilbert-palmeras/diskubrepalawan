import LayoutWrapper from 'components/layout/LayoutWrapper';
import PackageDetails from 'components/pages/packageDetails/PackageDetails';
import { NextSeo } from 'next-seo';
import {
  getTourPackages
} from 'mock-api';
const Tours = (data) => {

  return (
    <>
      <NextSeo
        title={`${data.tours.title}`}
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />


      <LayoutWrapper data={data}>
        <PackageDetails />
      </LayoutWrapper>


      {/* <Header />
      <PackageDetailsPage />
      <Footer className="footer-area mt-110" /> */}
    </>
  );
};

export async function getServerSideProps(context) {
  const tours = await getTourPackages(context.params.id)
  console.log(tours)
  return {
    props: { tours }
  }
}

export default Tours;
