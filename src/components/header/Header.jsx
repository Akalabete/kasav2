import { Link } from 'react-router-dom';
import vectorA from '../../assets/vectorA.png';
import house from '../../assets/house.png';
import vectorK from '../../assets/vectorK.png';
import vectorS from '../../assets/vectorS.png';



export default function Header({headerToRoot}) {
   
    const handleClickOnNav = (event) => {
        console.log(event.target); 
        if(event.target ==="lien about"){
            ajoute la classe active a apropos
            et retirer a home
            passe headerToRoot("about")
            sinon ajoute la classe active a home et
            retire a about
            pass headerToRoot("home")
        }
      };
    headerToRoot(true)
    return (
        <div className="header-container" >
          <div className="header">
                <div className="vector-group">
                    <img src={vectorK} alt="K" className="vectorK" />
                    <img src={house} alt="maison en forme de A" className="house" />
                    <img src={vectorS} alt="S" className="vectorS" />
                    <img src={vectorA} alt="A" className="vectorA" />
                </div>
            </div>
            <div className="nav">
            <nav>
                <ul>
                    <div className="home active">
                        <li>
                        
                        <Link to="/" onClick={handleClickOnNav} >
                            Accueil
                        </Link>
                        </li>
                    </div>
                    <div className="about">
                        <li>
                        <Link to="about"  onClick={handleClickOnNav}>
                            A Propos
                        </Link>
                        </li>
                    </div>
                </ul>
            </nav>
            </div>
        </div>
    )
  }

