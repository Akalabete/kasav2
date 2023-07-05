import goodiesData from "../../data/logements.json";

export default function Gallery(){

    return(
    <div className="gallery">
        {goodiesData.map((logement) => (
            <div
                key={logement.id}
                className="logement">
                    <img src={logement.cover} alt={logement.title} />
                    <h3 className="logement-title">{logement.title}</h3>
            </div>
       ))}
    </div>
    )
}

