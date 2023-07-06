import React, { useState } from 'react';
import Header from '../components/header/Header';
import Gallery from './gallery/Gallery';
import Footer from '../components/footer/Footer';
import HeaderCover from '../components/headerCover/Headercover';
import About from './about/About';
import Goodie from '../routes/goodie/Goodie'

export default function Root() {
  const [currentPage, setCurrentPage] = useState("root");

  const headerToRoot = (childdata) => {
    setCurrentPage(childdata);
    setViewedPic([])
  };
  const [viewedPic, setViewedPic] = useState([]);
  const galleryToRoot = (childdata)=> {
    setViewedPic(childdata);
  }

  console.log(currentPage);

  return (
    <>
      <Header headerToRoot={headerToRoot} />
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
          }  