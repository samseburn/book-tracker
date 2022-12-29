import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookDataContext } from '../../App';
import { BookEditor } from '../../components/BookEditor';

const Edit = () => {
	const [originData, setOriginData] = useState();
	const { bookId } = useParams();
	const navigate = useNavigate();
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
		<>{originData && <BookEditor originData={originData} isEdit={true} />}</>
	);
};

export default Edit;
