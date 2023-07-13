import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import Gallery from './gallery/Gallery';
import Footer from '../components/footer/Footer';
import HeaderCover from '../components/headerCover/Headercover';
import About from './about/About';
import Goodie from '../routes/goodie/Goodie'
import ErrorPage from "../error-page";
import goodiesData from "../data/logements.json";

export default function Root() {
  const url = window.location.href;
  const debut = url.indexOf("/gallery/") + "/gallery/".length;
  const fin = url.length;
  const urlExtracted = url.substring(debut, fin);
  const filterData = goodiesData.filter(
    (logement) => logement.id === urlExtracted
  );
  const isHomePage = debut === 8 || debut === 0;
  const isAboutPage = url === `${window.location.origin}/about`;
    
  const [rootToError, setRootToError] = useState(false);
  const [isErrorReset, setIsErrorReset] = useState(false);
  const resetError = () => {
    setIsErrorReset(true);
    setRootToError(false);
  };
  const handleResetError = () => {
    setIsErrorReset(false);
  };

  const [currentPage, setCurrentPage] = useState("root");
  const headerToRoot = (childdata) => {
    setCurrentPage(childdata);
    setIsErrorReset(false);
    setViewedPic([])
  };

  const [viewedPic, setViewedPic] = useState([]);
  const galleryToRoot = (childdata)=> {
    setViewedPic(childdata);
  }

  useEffect(() => {
    if (urlExtracted.length > 0 &&
        filterData.length === 0 && 
        !isHomePage && 
        !isAboutPage) {
      setRootToError(true);
    } else {
      setRootToError(false);
    }
  }, [urlExtracted, filterData, isHomePage, isAboutPage]);

if (rootToError) {
    return <ErrorPage resetError={resetError} handleResetError={handleResetError} rootToError={rootToError} />;
  } else {

  return (
    <>
      <Header headerToRoot={headerToRoot} resetError={resetError} />
      {viewedPic.length !== 0 ? (
        <Goodie
          rootToGoodie={viewedPic}
          headerToRoot={() => headerToRoot(false)}
        />
      ) : (
        <>
          <HeaderCover rootToHeaderCover={currentPage} />
          {currentPage === "about" ? (
            <About />
          ) : (
            <Gallery galleryToRoot={galleryToRoot} />
          )}
        </>
      )}
      <Footer />
    </>
  );
}  }