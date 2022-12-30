import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components';

const BookItem = (props) => {
	const navigate = useNavigate();
	const { title, author, publisher, year, comment, docID } = props;
	const goBook = () => {
		navigate(`/book/${docID}`);
	};

	return (
		<tr>
			<td>{title}</td>
			<td>{author}</td>
			<td>{publisher}</td>
			<td>{year}</td>
			<td>{comment}</td>
			<td>
				<Button onClick={goBook} colorType={'love'}>
					상세보기
				</Button>
			</td>
		</tr>
	);
};

export default BookItem;
