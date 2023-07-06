import { useEffect, useRef } from "react";

export function ExpandableAnimation({ expandedDivs }) {
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const animateExpandables = () => {
      const expandables = document.querySelectorAll(".expandable");
      expandables.forEach((expandable) => {
        if (expandedDivs.includes(expandable.dataset.name)) {
          expandable.classList.add("appear");
        } else {
          expandable.classList.remove("appear");
        }
      });

      animationFrameIdRef.current = requestAnimationFrame(animateExpandables);
    };

    animationFrameIdRef.current = requestAnimationFrame(animateExpandables);

    return () => cancelAnimationFrame(animationFrameIdRef.current);
  }, [expandedDivs]);

  return null;
}