import styled from 'styled-components';
import { Header } from 'components';
import { MEDIA } from 'styles';

const Container = ({ content }) => {
	return (
		<>
			<Header />

			<ContentWrapper>{content}</ContentWrapper>
		</>
	);
};

const ContentWrapper = styled.section`
	height: calc(100vh - 60px);
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	@media ${MEDIA.md} {
		margin: 0 auto;
		width: 70%;
		max-width: 600px;
	}
`;
export default Container;
