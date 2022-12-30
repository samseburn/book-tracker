import { BookItem } from 'components';
import styled from 'styled-components';

const BookList = (props) => {
	const { bookData } = props;
	return (
		<BookItemtWrapper>
			{bookData.map((book) => (
				<BookItem
					key={book.docID}
					title={book.title}
					author={book.author}
					publisher={book.publisher}
					year={book.year}
					comment={book.comment}
					review={book.review}
					docID={book.docID}
					date={book.date}
				/>
			))}
		</BookItemtWrapper>
	);
};

const BookItemtWrapper = styled.div`
	/* background: snow; */
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export default BookList;
