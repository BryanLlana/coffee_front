import { keyframes } from "styled-components";
import { IModalAnchor } from "./index";

const slideInFromTop = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0.7;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0.7;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-50%);
    opacity: 0.7;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(50%);
    opacity: 0.7;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInCenter = keyframes`
  0% {
    opacity: 0.8;
    scale: 0.95;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
`;

export const getAnimationByAnchor = (anchor: IModalAnchor) => {
	switch (anchor) {
		case "top":
			return slideInFromTop;
		case "bottom":
			return slideInFromBottom;
		case "left":
			return slideInFromLeft;
		case "right":
			return slideInFromRight;
		default:
			return fadeInCenter;
	}
};
