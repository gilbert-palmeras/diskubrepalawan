import PackageDetailsPage from '../src/components/pages/packageDetails/PackageDetails';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';
import LayoutWrapper from 'components/layout/LayoutWrapper';
import { NextSeo } from 'next-seo';
const PackageDetails = ( data ) => {
  console.log("Data Server Side", data);
  return (
    <>
    <NextSeo
      title="Using More of Config"
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

export async function getServerSideProps() {
  return {
    props: {data:'This should be the title'}
  }
}

export default PackageDetails;
