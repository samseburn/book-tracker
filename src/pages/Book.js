import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookDataContext } from '../App';

const Book = () => {
	const navigate = useNavigate();
	const { bookId } = useParams();
	const idRef = useRef();
	console.log(bookId);

	const bookData = useContext(BookDataContext);
	const [originData, setOriginData] = useState();

	const goEdit = () => {
		navigate(`/edit/${bookId}`);
	};

	useEffect(() => {
		if (bookData.length >= 1) {
			// 데이터 있을 경우
			const targetBook = bookData.find(book => book.docID === bookId);
			idRef.current = targetBook;

			setOriginData(targetBook);
		}
	}, [bookId, bookData]);

	if (!originData) {
		return <div>Page Not Found</div>;
	} else {
		return (
			<div>
				여기는 책의 상세 정보를 볼 수 있는 페이지 입니다.
				<span>ID: {bookId}</span>
				<button onClick={goEdit}>수정하기</button>
				<button
					onClick={() => {
						navigate('/', { replace: true });
					}}
				>
					삭제하기
				</button>
				<div
					style={{
						width: 500,
						padding: 20,
						border: '1px solid gray',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'gainsboro',
					}}
				>
					<p>{originData && originData.title}</p>
					<p>{originData && originData.author}</p>
					<p>{originData && originData.publisher}</p>
					<p>{originData && originData.year}</p>
				</div>
			</div>
		);
	}
};

export default Book;
