import { children } from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZE, FONT_WEIGHT } from 'styles';

const Label = ({ text }) => {
	return <StyledLabel>{text}</StyledLabel>;
};

const StyledLabel = styled.label`
	display: block;
	flex-shrink: 0;
	color: ${COLORS.dark};
	/* font-size: ${FONT_SIZE.base}; */
	font-size: 15px;
	font-weight: ${FONT_WEIGHT.regular};
`;

export default Label;
