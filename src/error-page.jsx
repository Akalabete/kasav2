import { useRouteError, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function ErrorPage({galleryToError}) {
    
    const error = useRouteError();
    
    const errorStatus = galleryToError ? 304 : error.status;
  
  
  
  return (
      <>

      <Header />
      <div id="error-page">
        <h1>{errorStatus}</h1>
        <p className="error-p">Ooops, la page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
      </>
    );
  }