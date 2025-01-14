import styled, { css } from "styled-components";
import { MediaQuery } from "../../hooks/useMediaQuery";
import { PropsWithStyledPrefix } from "../Button/utils";
import { getAnimationByAnchor } from "./keyframes";
import { IModalPositionProps } from "./index";

interface StyledCardProps {
	$borderRadius: string;
	$width: string
}

export const Card = styled.div<PropsWithStyledPrefix<IModalPositionProps> & StyledCardProps>`
	position: fixed;
	background-color: white;
	width: 100%;
	max-height: 50%;
	height: 100%;
	overflow: hidden;
	${(p) =>
		p.$anchor &&
		css`
			${p.$anchor}: 0;
			${["right", "left"].includes(p.$anchor) && "height: 100%;"}
			${["top", "bottom"].includes(p.$anchor) && "width: 100%;"}
		`}

	&[data-centered="true"] {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	animation: ${(p) => getAnimationByAnchor(p.$anchor!)} 0.5s cubic-bezier(0.19, 1, 0.22, 1);
	transform-origin: left;
	border-radius: ${(p) => p.$borderRadius};

	@media ${MediaQuery.MIN_TABLET} {
		min-width: ${(p) => p.$width};
		width: 100%;
		max-width: ${(p) => p.$width};
	}
`;
