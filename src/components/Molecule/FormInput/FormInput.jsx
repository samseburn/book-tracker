import styled from 'styled-components';
import { COLORS, MEDIA } from 'styles';

// Label + {Input, Textarea, ...}
const FormInput = ({ leftChild, rightChild, bottomChild }) => {
	return (
		<StyledFormInput>
			<div className="input-group">
				{leftChild}
				{rightChild}
			</div>
			{bottomChild}
		</StyledFormInput>
	);
};

const StyledFormInput = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
	max-width: 412px;
	margin-bottom: 20px;
	padding: 20px;
	background-color: ${COLORS.background};
	border-radius: 12px;

	&:focus-within {
		border: 1px solid ${COLORS.border};
	}

	.input-group {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	@media ${MEDIA.md} {
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		.input-group {
			flex-direction: row;
		}
	}
`;
export default FormInput;
