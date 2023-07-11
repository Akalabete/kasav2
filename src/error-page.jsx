import { useRouteError, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function ErrorPage() {
    const error = useRouteError();
    
  
    return (
      <>

      <Header />
      <div id="error-page">
        <h1>{error.status}</h1>
        <p className="error-p">Ooops, la page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
      </>
    );
  }