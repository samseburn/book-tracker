import styled from 'styled-components';
import { COLORS, FONT_SIZE, MEDIA } from '../../../styles/index';

const Button = ({ type, children, ...props }) => {
	return (
		<StyledButton type={type} {...props}>
			{children}
		</StyledButton>
	);
};

const StyledButton = styled.button`
	width: 100%;
	padding: 10px 20px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	${({ type }) => `
    background: ${type === 'main' ? COLORS.white : COLORS.red};
    color: ${type === 'main' ? COLORS.primary : COLORS.black}; 
  `}
	border: 1px solid ${COLORS.primary};
	border-radius: 20px;
	font-size: ${FONT_SIZE.small};
	transition: all 200ms ease-in-out;
	cursor: pointer;

	@media (hover: hover) {
		:hover {
			color: ${COLORS.primary};
			background-color: ${COLORS.background};
		}

		:active {
			color: ${COLORS.primary};
			background-color: ${COLORS.background};
		}
	}

	@media ${MEDIA.md} {
		height: 56px;
		font-size: ${FONT_SIZE.medium};
	}
`;

const defaultProps = {
	colorType: 'main',
};

Button.defaultProps = defaultProps;

export default Button;
