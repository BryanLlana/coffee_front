import styled, { css } from "styled-components";

interface Config {
	disabled: boolean;
	small: boolean;
}

export const getBaseInputWrapperStyles = (config: Config) => css`
	--size: ${config.small ? "38px" : "48px"};
	min-width: 100px;
	width: auto;
	outline: none;
	height: ${config.small ? "var(--size)" : "auto"};
	min-height: var(--size);
	display: flex;
	align-items: center;
	gap: 8px;
	border-radius: 8px;
	border: 1px solid ${(p) => p.theme.color.NEUTRAL[400]};
	background-color: ${(p) => p.theme.color.NEUTRAL[0]};
	transition: border-color 0.15s ease-in-out;

	&:focus-within {
		border-color: #6192eb;
	}

	${config.disabled
		? css`
				background-color: ${(p) => p.theme.color.NEUTRAL[200]};
				input {
					cursor: not-allowed;
				}
		  `
		: null}
`;

export const FormContainer = styled.main`
	width: min(375px, 100%);
	padding-inline: 16px;

	& > img {
		display: block;
		margin: 0 auto;
		border-radius: 8px;
		margin-bottom: 20px;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const SubtleText = styled.p`
	margin-top: 20px;
	color: ${(p) => p.theme.color.NEUTRAL[600]};
	text-align: center;

	a {
		font-weight: 500;
	}
`;