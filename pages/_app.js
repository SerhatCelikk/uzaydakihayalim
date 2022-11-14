import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/azino-icons.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/main.css";
import "swiper/swiper-bundle.min.css";
import "react-toastify/dist/ReactToastify.css";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";
import { StoreProvider } from "../context/store";

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <MenuContextProvider>
        <SearchContextProvider>
          <Component {...pageProps} />
        </SearchContextProvider>
      </MenuContextProvider>
    </StoreProvider>
  );
};

export default MyApp;
