import React, { 
            useState,
            useEffect,
            useRef 
        } from "react";
import datas from "../../data/qualities.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown,
        faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
const [expandedDivs, setExpandedDivs] = useState([]);
const inputRefs = useRef([]);

const handleQualityClick = (name) => {
if (expandedDivs.includes(name)) {
setExpandedDivs(expandedDivs.filter((div) => div !== name));
} else {
setExpandedDivs([...expandedDivs, name]);
}
};
useEffect(() => {
let animationFrameId;

const animateExpandables = () => {
const expandables = document.querySelectorAll(".expandable");
expandables.forEach((expandable) => {
if (expandedDivs.includes(expandable.dataset.name)) {
expandable.classList.add("appear");
} else {
expandable.classList.remove("appear");
}
});

animationFrameId = requestAnimationFrame(animateExpandables);
};

animationFrameId = requestAnimationFrame(animateExpandables);

return () => cancelAnimationFrame(animationFrameId);
}, [expandedDivs]);
useEffect(() => {
inputRefs.current.forEach((ref, index) => {
if (expandedDivs.includes(ref.dataset.name)) {
ref.focus();
}
});
}, [expandedDivs]);

return (
<div className="qualities">
{datas.map((element, index) => (
<div
key={element.id}
className={`quality ${expandedDivs.includes(element.name) ? "expanded" : ""}`}
onClick={() => handleQualityClick(element.name)}
>
<div className="quality-content">
  <h3>{element.name}</h3>
  <span>
    {expandedDivs.includes(element.name) ? (
      <FontAwesomeIcon icon={faChevronUp} className="fabout" />
    ) : (
      <FontAwesomeIcon icon={faChevronDown} className="fabout"/>
    )}
  </span>
</div>
<div
  className="expandable"
  tabIndex={index+1}
  style={{ display: expandedDivs.includes(element.name) ? "flex" : "none" }}
  data-name={element.name}
  ref={(ref) => (inputRefs.current[index] = ref)}
> 
  <p>{element.text}</p>
</div>
</div>
))}
</div>
);
}
