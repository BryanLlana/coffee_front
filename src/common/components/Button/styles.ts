import { IBtnThemeProps } from "./baseButton";
import { PropsWithStyledPrefix } from "./utils";
import styled, { css } from "styled-components";

interface StyledBtnProps extends PropsWithStyledPrefix<IBtnThemeProps> {
	$fullWidth?: boolean;
	$square?: boolean;
	$rounded?: boolean;
	$h: string;
	$fontSize: string;
}

export const Btn = styled.button<StyledBtnProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${(p) => (p.$square ? p.$h : p.$fullWidth ? "100%" : "fit-content")};
	padding: 16px 24px;
	border-radius: ${(p) => (p.$rounded ? "20vw" : "8px")};
	height: ${(p) => p.$h};
	gap: 8px;
	${(p) =>
		p.$square &&
		css`
			min-width: ${p.$h};
			padding-inline: 0;
		`}

	letter-spacing: -0.64px;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;

	border: none;
	outline: none;

	cursor: pointer;

	color: ${(p) => p.$color};
	background-color: ${(p) => p.$backgroundColor};
	border: 1px solid ${(p) => p.$borderColor || "currentColor"};

	&:disabled {
		opacity: 0.75;
		cursor: not-allowed;
	}
`;
