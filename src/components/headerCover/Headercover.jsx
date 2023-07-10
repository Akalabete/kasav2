import headercovergallery from "../../assets/headercovergallery.png"
import headercoverabout from "../../assets/headercoverabout.png";

export default function HeaderCover({ rootToHeaderCover }) {
    return (
      <div className="header-img">
        {rootToHeaderCover === "about" ? (
          <img src={headercoverabout} alt="Header Background" className="header-bg" />
        ) : (
          <>
            <img src={headercovergallery} alt="Header Background" className="header-bg" />
            <p>
              Chez vous,
              <span className="line-break">
                <br />
              </span>
              partout et ailleurs
            </p>
          </>
        )}
      </div>
    );
  }
  