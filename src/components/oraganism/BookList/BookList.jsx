import { BookItem } from 'components';

const BookList = (props) => {
	const { bookData } = props;
	return (
		<table className="booklist">
			<thead>
				<tr>
					<th scope={'col'}>Title</th>
					<th scope={'col'}>지은이</th>
					<th scope={'col'}>출판사</th>
					<th scope={'col'}>출판년도</th>
					<th scope={'col'}>한줄리뷰</th>
					<th scope={'col'}>상세보기</th>
				</tr>
			</thead>
			<tbody>
				{bookData.map((book) => (
					<BookItem
						key={book.docID}
						title={book.title}
						author={book.author}
						publisher={book.publisher}
						year={book.year}
						comment={book.comment}
						docID={book.docID}
					/>
				))}
			</tbody>
		</table>
	);
};

export default BookList;
