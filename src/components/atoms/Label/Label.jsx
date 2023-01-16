import styled from 'styled-components';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MEDIA } from 'styles';

const Label = ({ text }) => {
	return <StyledLabel>{text}</StyledLabel>;
};

const StyledLabel = styled.label`
	display: block;
	flex-shrink: 0;
	color: ${COLORS.dark};
	font-size: ${FONT_SIZE.small};
	font-weight: ${FONT_WEIGHT.regular};
	color: ${COLORS.tertiary};
	min-width: 72px;
	margin-bottom: 10px;

	@media ${MEDIA.md} {
		font-size: ${FONT_SIZE.base};
		margin-bottom: 0;
	}
`;

export default Label;
