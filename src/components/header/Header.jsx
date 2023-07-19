import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import vectorA from '../../assets/vectorA.png';
import house from '../../assets/house.png';
import vectorK from '../../assets/vectorK.png';
import vectorS from '../../assets/vectorS.png';



export default function Header({headerToRoot, resetError, isErrorPage}) {
   
    const homeLinkRef = useRef(null);
    const aboutLinkRef = useRef(null);
    
    

    const handleClickOnNav = (linkRef, linkId) => {
        homeLinkRef.current.classList.remove('active');
        aboutLinkRef.current.classList.remove('active');
        linkRef.current.classList.add('active');
        
        if (linkId === 'accueil') {
            
            headerToRoot("home")
        } else if (linkId === 'about') {
            
            headerToRoot("about")
        }
        resetError(false);
    };
    useEffect(() => {
        if (isErrorPage) {
          homeLinkRef.current.classList.remove('active');
          aboutLinkRef.current.classList.remove('active');
        }
      }, [isErrorPage]);
    return (
        <div className="header" >
          <div className="header-logo">
                <div className="vector-group">
                    <img src={vectorK} alt="K" className="vectorK" />
                    <img src={house} alt="maison en forme de A" className="house" />
                    <img src={vectorS} alt="S" className="vectorS" />
                    <img src={vectorA} alt="A" className="vectorA" />
                </div>
            </div>
            <div>
                <div className="nav">
                <nav>
                    <ul>
                        <div className="home">
                            <li>
                            
                            <Link to="gallery/"
                            ref={homeLinkRef}
                            
                            className="active"
                            data-link-id="accueil"
                            onClick={()=>{
                                handleClickOnNav(homeLinkRef, 'accueil');
                                
                            }} >
                                <span>Accueil</span>
                            </Link>
                            </li>
                        </div>
                        <div className="about">
                            <li>
                            <Link to="about" ref={aboutLinkRef}  data-link-id="a-propos" 
                            onClick={()=>{
                                handleClickOnNav(aboutLinkRef, 'about');
                                
                                }}>
                               <span>A Propos</span>
                            </Link>
                            </li>
                        </div>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    )
}

