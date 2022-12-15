import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookItem = props => {
	const navigate = useNavigate();
	const { id, title, author, publisher, year, docID } = props;
	const goBook = () => {
		navigate(`/book/${docID}`);
	};

	return (
		<tr>
			<td>{id}</td>
			<td>{title}</td>
			<td>{author}</td>
			<td>{publisher}</td>
			<td>{year}</td>
			<td>
				<button onClick={goBook}>상세보기</button>
			</td>
		</tr>
	);
};

export default BookItem;
