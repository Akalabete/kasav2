import Header from '../components/header/Header';
import Gallery from '../components/gallery/Gallery';
import Footer from '../components/footer/Footer';
import HeaderCover from '../components/headerCover/Headercover';
import About from '../components/about/About'
import { useState } from 'react';


export default function Root(){
    const [currentPage, setCurrentPage] = useState("root")
    const headerToRoot = (childdata) => {
        setCurrentPage(childdata);
       
    
        return (
            <>
            <Header 
                headerToRoot={headerToRoot}
                rootToHeader={currentPage}
                />
            <HeaderCover rootToHeaderCover={currentPage}/>
            {currentPage.length !== 0 ? (
              <>
                
                <About />
              </>
            ) : (
              <>
                <Gallery />
              </>
            )}
            <Footer />
          </>
        );
            
      
    }
}