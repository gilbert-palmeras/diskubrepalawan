import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { MockProvider } from '../src/context'

import '../src/index.scss';
import "react-modal-video/css/modal-video.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <MockProvider>
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  </MockProvider>
  );
}
export default MyApp;
