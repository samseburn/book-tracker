import styled from 'styled-components';
import { MEDIA } from 'styles';

// Label + {Input, Textarea, ...}
const FormInput = ({ leftChild, rightChild }) => {
	return (
		<StyledFormInput>
			{leftChild}
			{rightChild}
		</StyledFormInput>
	);
};

const StyledFormInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 100%;
	margin-bottom: 10px;

	@media ${MEDIA.md} {
		width: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;
export default FormInput;
