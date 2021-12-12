import {GlobalStyles} from "./GlobalStyles";
import './App.css';
import {lazy, Suspense} from "react";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/ScrollToTop"));


function App() {
  return (
    <>
      <Suspense fallback={null}>
          <GlobalStyles/>
          <Header/>
          <Home/>
          <Footer/>
          <ScrollToTop/>
      </Suspense>
    </>
  );
}

export default App;
