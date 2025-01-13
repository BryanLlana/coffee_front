import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	min-width: 0;

	label {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		color: ${(p) => p.theme.color.NEUTRAL[700]};
		line-height: 21px;
		white-space: nowrap;
	}
`;

export const InlineError = styled.span`
	line-height: 150%;
	color: ${(p) => p.theme.color.ERROR[500]};
`;
