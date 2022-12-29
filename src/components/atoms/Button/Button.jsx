import styled from 'styled-components';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MEDIA } from '../../../styles/index';

const Button = ({ btnType, text, ...props }) => {
	return (
		<StyledButton btnType={btnType} {...props}>
			{text}
		</StyledButton>
	);
};

const StyledButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	padding: 0 8px;
	border-radius: 4px;
	font-weight: ${FONT_WEIGHT.bold};
	transition: background-color 200ms ease-in-out;
	cursor: pointer;
	border: 1px solid ${COLORS.pink};
	font-size: ${FONT_SIZE.small};
	height: 32px;

	${({ btnType }) => `
    background: ${btnType === 'primary' ? COLORS.pink : COLORS.background};
    color: ${btnType === 'primary' ? COLORS.white : COLORS.pink}; 
  `}

	@media (hover: hover) {
		:hover {
			color: ${COLORS.white};
			background-color: ${COLORS.pink};
		}

		:active {
			color: ${COLORS.white};
			background-color: ${COLORS.pink};
		}
	}

	@media ${MEDIA.md} {
		height: 48px;
		font-size: ${FONT_SIZE.medium};
	}
`;

const defaultProps = {
	colorType: 'main',
};

Button.defaultProps = defaultProps;

export default Button;
