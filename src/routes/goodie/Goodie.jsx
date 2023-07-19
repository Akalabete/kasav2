import goodiesData from "../../data/logements.json";
import {  useState,
          useRef,
          useEffect,
         } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ExpandableAnimation } from "../../components/expandableAnimation/ExpandableAnimation";



export default function Goodie({ rootToGoodie }) {
  const thisarray = Array.from(goodiesData);
  const thisobject = thisarray.find((object) => object.id === rootToGoodie);
  const name = ["description", "equipments"];
  const [expandedDivs, setExpandedDivs] = useState([]);
  const descriptionRef = useRef(null);
  const equipmentsRef = useRef(null);
 

  const handleScrollersClick = (name) => {
    if (expandedDivs.includes(name)) {
      setExpandedDivs(expandedDivs.filter((div) => div !== name));
    } else {
      setExpandedDivs([...expandedDivs, name]);
    }
  };

  const [currentPic, setCurrentPic] = useState(thisobject.pictures[0]);
  const handleSlideClick = (isNextPic) => {
    if (isNextPic) {
      const currentIndex = thisobject.pictures.indexOf(currentPic);
      const nextIndex = (currentIndex + 1) % thisobject.pictures.length;
      setCurrentPic(thisobject.pictures[nextIndex]);
    } else {
      const currentIndex = thisobject.pictures.indexOf(currentPic);
      const previousIndex =
        (currentIndex - 1 + thisobject.pictures.length) %
        thisobject.pictures.length;
      setCurrentPic(thisobject.pictures[previousIndex]);
    }
  };
  useEffect(() => {
    if (expandedDivs.includes("description")) {
      descriptionRef.current.focus();
    }
    if (expandedDivs.includes("equipments")) {
      equipmentsRef.current.focus();
    }
  }, [expandedDivs]);
  
  return (
    <div className="thisobject-container">
      <div className="slider">
        <div className="left-arrow" onClick={() => handleSlideClick(false)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <img src={currentPic} alt="photos du bien proposé" />
        <div className="right-arrow" onClick={() => handleSlideClick(true)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="counter">
          
          <p>{thisobject.pictures.indexOf(currentPic)+1}/{thisobject.pictures.length}</p>
        </div>
      </div>
      <div className="infos">
        <div className="goodie-info">
          <h2>{thisobject.title}</h2>
          <p>{thisobject.location}</p>
        </div>
        <div className="productowner-info">
          <div className="name">
            {thisobject.host.name.split(" ").map((namePart, index) => (
                <p key={index}>
                  {namePart}
                  <br />
                </p>
            ))}
          </div>
          <div className="circle">
            <img src={thisobject.host.picture} alt="le propriétaire" />
          </div>
        </div>
      </div>
      <div className="tagstar-container">
        <div className="tags">
          {thisobject.tags.map((tag, index) => (
            <div className="tag" key={index}>
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <div className="stars">{renderStars(thisobject.rating)}</div>
        </div>
        <div className="scrollers">
        {name.map((element) => (
            <div
            key={element}
            className={`${expandedDivs.includes(element) ? "expanded" : ""} ${element}`}
            onClick={() => handleScrollersClick(element)}
            ref={element === "description" ? descriptionRef : equipmentsRef}
            >
            <div className="scroller-content">
                <h3>{element=== 'equipments'? 'Equipements' : 'Description'}</h3>
                <span>
                <FontAwesomeIcon 
                                icon={faChevronUp}
                                className={expandedDivs.includes(element)? 'rotate': 'reverse'} />
                </span>
            </div>
            {element === "description" ? (
                <div
                className={`scroller-expandable ${expandedDivs.includes(element) ? "appear" : ""}`}
                style={{ display: expandedDivs.includes(element) ? "flex" : "none" }}
                data-name={element}
                >
                <p>{thisobject.description}</p>
                </div>
            ) : element === "equipments" ? (
                <div
                className={`scroller-expandable ${expandedDivs.includes(element) ? "appear" : ""}`}
                style={{ display: expandedDivs.includes(element) ? "flex" : "none" }}
                data-name={element}
                >
                {thisobject.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
                </div>
            ) : null}
            </div>
            ))}
        </div>
      <ExpandableAnimation expandedDivs={expandedDivs} />
    </div>
  );
}


function renderStars(rating) {
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    let starColor = i < rating ? "#FF6060" : "lightgrey";
    stars.push(
      <div className="star" key={i}>
        <FontAwesomeIcon icon={faStar} style={{ color: starColor }} />
      </div>
    );
  }

  return stars;
}
