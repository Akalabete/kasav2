import { Link } from "react-router-dom";
import goodiesData from "../../data/logements.json";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <div className="gallery">
          {goodiesData.map((logement) => (
            <Link
              key={logement.id}
              className="logement"
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
