import { getBaseInputWrapperStyles } from "../../styles";
import styled from "styled-components";

export const Wrapper = styled.div<{
	$hasStartEl: boolean;
	$hasEndEl: boolean;
	$disabled: boolean;
	$small: boolean;
}>`
	padding-inline-start: ${(p) => (p.$hasStartEl ? "12px" : "16px")};
	padding-inline-end: ${(p) => (p.$hasEndEl ? "12px" : "16px")};

	${(p) =>
		getBaseInputWrapperStyles({
			disabled: p.$disabled,
			small: p.$small,
		})}

	input {
		min-height: 48px;
		flex: 1;
		min-width: 0px;
		background-color: transparent;
		color: ${(p) => p.theme.color.NEUTRAL[900]};
		outline: none;
		border: none;

		&::placeholder {
			color: ${(p) => p.theme.color.NEUTRAL[500]};
		}
		&::-ms-reveal,
		&::-ms-clear {
			display: none !important;
		}
	}
`;
