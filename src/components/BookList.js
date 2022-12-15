import React from 'react';
import BookItem from './BookItem';

const BookList = props => {
	const { bookData } = props;
	return (
		<table border={1}>
			<thead>
				<tr>
					<th scope={'col'}>순번</th>
					<th scope={'col'}>책 제목</th>
					<th scope={'col'}>지은이</th>
					<th scope={'col'}>출판사</th>
					<th scope={'col'}>출판년도</th>
					<th scope={'col'}>상세보기</th>
				</tr>
			</thead>
			<tbody>
				{bookData.map(book => (
					<BookItem
						key={book.docID}
						id={book.id}
						title={book.title}
						mnb
						author={book.author}
						publisher={book.publisher}
						year={book.year}
						docID={book.docID}
					/>
				))}
			</tbody>
		</table>
	);
};

export default BookList;
