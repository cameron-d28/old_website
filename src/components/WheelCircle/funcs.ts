import { HoverTypes } from "./types";

function getStyling(hovertype: HoverTypes, i: number, total_floaters: number) {
  // determine the angle the floater will come out from
  let ratio = i / total_floaters;
  let rad = ratio * 6.283;
  let angle = ratio * 360;

  switch (hovertype) {
    case HoverTypes.none:
      return "";

    case HoverTypes.spiral:
      return { "--rotate": `${angle}deg` };

    case HoverTypes.straight:
      let distance = 40; // Distance from the center of the circle
      let translateX = Math.cos(rad) * distance;
      let translateY = Math.sin(rad) * distance;

      return {
        "--translate-x": `${translateX}cqh`,
        "--translate-y": `${translateY}cqh`,
      };

    default:
      break;
  }
}

export { getStyling };
