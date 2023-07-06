import React, { useState } from 'react';
import Header from '../components/header/Header';
import Gallery from '../components/gallery/Gallery';
import Footer from '../components/footer/Footer';
import HeaderCover from '../components/headerCover/Headercover';
import About from '../components/about/About';

export default function Root() {
  const [currentPage, setCurrentPage] = useState("root");

  const headerToRoot = (childdata) => {
    setCurrentPage(childdata);
  };

  console.log(currentPage);

  return (
    <>
      <Header headerToRoot={headerToRoot} />
      <HeaderCover rootToHeaderCover={currentPage} />
      {currentPage === "about" ? <About /> : <Gallery />}
      <Footer />
    </>
  );
}
