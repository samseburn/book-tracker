import styled from 'styled-components';
import { Header } from 'components';

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
`;
export default Container;
