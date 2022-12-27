import styled from 'styled-components';
import { COLORS } from '../../../styles';

const Input = styled.input`
	display: block;
	padding: 4px 16px;
	width: 100%;
	background-color: ${COLORS.background};
	border: 8px;
	border: 1px solid ${COLORS.border};
`;

export default Input;
