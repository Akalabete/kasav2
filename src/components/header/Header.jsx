import { Link } from 'react-router-dom';
import { useRef } from 'react';
import vectorA from '../../assets/vectorA.png';
import house from '../../assets/house.png';
import vectorK from '../../assets/vectorK.png';
import vectorS from '../../assets/vectorS.png';



export default function Header({headerToRoot}) {
   
    const homeLinkRef = useRef(null);
    const aboutLinkRef = useRef(null);
        
     
    const handleClickOnNav = (linkRef, linkId) => {
        
        
        
        homeLinkRef.current.classList.remove('active');
        aboutLinkRef.current.classList.remove('active');
        linkRef.current.classList.add('active');
        
        if (linkId === 'accueil') {
            console.log("clické")
            headerToRoot("home")
        } else if (linkId === 'about') {
            
            headerToRoot("about")
        }
    };
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
                            
                            <Link to="/"
                            ref={homeLinkRef}
                            
                            className="active"
                            data-link-id="accueil"
                            onClick={()=> handleClickOnNav(homeLinkRef, 'accueil')} >
                                Accueil
                            </Link>
                            </li>
                        </div>
                        <div className="about">
                            <li>
                            <Link to="about" ref={aboutLinkRef}  data-link-id="a-propos" 
                            onClick={()=> handleClickOnNav(aboutLinkRef, 'about')}>
                                A Propos
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

