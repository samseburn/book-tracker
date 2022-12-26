import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookDataContext } from '../App';
import { BookEditor } from '../components/BookEditor';

const Edit = () => {
	const [originData, setOriginData] = useState();
	const { bookId } = useParams();

	const bookData = useContext(BookDataContext);

	// id 조회
	useEffect(() => {
		if (bookData.length >= 1) {
			// 데이터 있을 경우
			const targetBook = bookData.find((book) => book.docID === bookId);

			if (targetBook) {
				setOriginData(targetBook);
			}
			// else {
			// 	alert('찾으시는 책의 정보가 없습니다.');
			// 	navigate('/', { replace: true });
			// }
		}
	}, [bookId, bookData]);

	return (
		<div>
			{originData && <BookEditor originData={originData} isEdit={true} />}
		</div>
	);
};

export default Edit;
