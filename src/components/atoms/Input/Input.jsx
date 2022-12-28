import styled from 'styled-components';
import { COLORS } from 'styles';

const Input = styled.input`
	display: block;
	padding: 0px 16px;
	width: 100%;
	height: 32px;
	color: ${COLORS.primary};
	background-color: ${COLORS.white};
	border: 1px solid gray;

	&:focus {
		border: 1px solid ${COLORS.primary};
	}
`;

export default Input;
