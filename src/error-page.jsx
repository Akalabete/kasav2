import { useRouteError, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function ErrorPage({rootToError, handleResetError, headerToRoot}) {
    
    const error = useRouteError();
    
    const errorStatus = rootToError ? 304 : error.status;

  
  
  return (
      <>

      <Header headerToRoot={headerToRoot} rootToError={rootToError} isErrorPage={true} />
      <div id="error-page">
        <h1>{errorStatus}</h1>
        <p className="error-p">Ooops, la page que vous demandez n'existe pas.</p>
        <Link to="/" onClick={handleResetError}>Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
      </>
    );
  }