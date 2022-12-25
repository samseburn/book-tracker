import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookDispatchContext } from '../App';

const BookEditor = (props) => {
	const { originData, isEdit } = props;
	const { onCreate, onEdit } = useContext(BookDispatchContext);
	const navigate = useNavigate();
	const { bookId } = useParams();
	const resetData = {
		title: '',
		author: '',
		publisher: '',
		year: '',
		date: '',
	};
	const [book, setBook] = useState(resetData);

	// 데이터 생성 하기
	const handleContentChange = (e) => {
		setBook({ ...book, [e.target.name]: e.target.value });
		console.log(book);
	};

	const handleSubmit = (e) => {
		if (
			window.confirm(
				isEdit
					? '독서 정보를 수정하시겠습니까?'
					: '새로운 독서 정보를 만드시겠습니까?',
			)
		) {
			if (!isEdit) {
				onCreate(book);
			} else {
				onEdit(bookId, book);
			}
			navigate('/', { replace: true });
		}
	};

	useEffect(() => {
		if (isEdit) {
			setBook({
				title: originData.title,
				author: originData.author,
				publisher: originData.publisher,
				year: originData.year,
				date: originData.date,
			});
		}
	}, [isEdit, originData]);

	return (
		<div className="BookEditor">
			<section>
				<h1>{isEdit ? '책 정보 수정하기' : '새로운 책 등록하기'}</h1>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<label>
						제목:
						<input
							type={'text'}
							name={'title'}
							value={book.title}
							onChange={handleContentChange}
						/>
					</label>
					<label>
						저자:
						<input
							type={'text'}
							name={'author'}
							value={book.author}
							onChange={handleContentChange}
						/>
					</label>
					<label>
						출판사:
						<input
							type={'text'}
							name={'publisher'}
							value={book.publisher}
							onChange={handleContentChange}
						/>
					</label>
					<label>
						발행년도:
						<input
							type={'text'}
							name={'year'}
							value={book.year}
							onChange={handleContentChange}
						/>
					</label>
					<label>
						등록날짜:
						<input
							type={'date'}
							name={'date'}
							value={book.date}
							onChange={handleContentChange}
						/>
					</label>
				</div>
				<div className="button-group">
					<button onClick={() => navigate(-1)}>뒤로가기</button>
					<button onClick={handleSubmit}>저장하기</button>
				</div>
			</section>
		</div>
	);
};

export default BookEditor;
