import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import goodiesData from "../../data/logements.json";
import ErrorPage from "../../error-page";

export default function Gallery({ galleryToRoot }) {
  const url = window.location.href;
  const debut = url.indexOf("/gallery/") + "/gallery/".length;
  const fin = url.length;
  const urlExtracted = url.substring(debut, fin);
  const filterData = goodiesData.filter(
    (logement) => logement.id === urlExtracted
  );

  const [galleryToError, setGalleryToError] = useState(false);

  useEffect(() => {
    if (urlExtracted.length > 0 && filterData.length === 0) {
      setGalleryToError(true);
    } else {
      setGalleryToError(false);
    }
  }, [urlExtracted, filterData]);

  const handleClickOnPic = (logementId) => {
    galleryToRoot(logementId);
  };

  if (galleryToError) {
    return <ErrorPage galleryToError={galleryToError} />;
  } else {
    return (
      <div className="gallery-container">
        <div className="gallery-wrapper">
          <div className="gallery">
            {goodiesData.map((logement) => (
              <Link
                key={logement.id}
                className="logement"
                onClick={() => handleClickOnPic(logement.id)}
                to={`/gallery/${logement.id}`}
              >
                <div>
                  <img src={logement.cover} alt={logement.title} />
                  <h3 className="logement-title">{logement.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
