import  { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HeaderCover from '../components/headerCover/Headercover';
import ErrorPage from "../error-page";
import goodiesData from "../data/logements.json";

export default function Root() {
  const location = useLocation();
  const { logementId } = useParams();
  const debut = location.pathname.indexOf("/gallery/") + "/gallery/".length;
  const urlExtracted = location.pathname.substring(debut);
  const filterData = goodiesData.filter(
    (logement) => logement.id === urlExtracted
  );
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
    
  const [rootToError, setRootToError] = useState(false);
  const resetError = () => {
    setRootToError(false);
  };
  const [viewedPic, setViewedPic] = useState("");
  useEffect(() => {
    setViewedPic(urlExtracted);
  }, [urlExtracted]);

  useEffect(() => {
    if (urlExtracted.length > 0 && filterData.length === 0 && !isHomePage && !isAboutPage) {
      setRootToError(true);
    } else {
      setRootToError(false);
    }
  }, [urlExtracted, filterData, isHomePage, isAboutPage]);


  
  const [currentPage, setCurrentPage] = useState("root");
  const headerToRoot = (childdata) => {
    setCurrentPage(childdata);
    setRootToError(false); 
  };

  if (rootToError || (logementId && !viewedPic)) {
    return <ErrorPage />;
  } else {
    return (
      <>
        <Header headerToRoot={headerToRoot} resetError={resetError} />
        {viewedPic.length === 0 && <HeaderCover rootToHeaderCover={currentPage} logementId={logementId} />}
        <Outlet />
        <Footer />
      </>
    );
  }
}
