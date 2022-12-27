import styled from 'styled-components';

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
	align-items: center;
	width: 100%;
	justify-content: space-between;
	gap: 10px;
`;
export default FormInput;
