import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookDispatchContext } from '../App';

const BookEditor = props => {
	const { originData } = props;
	const { onCreate } = useContext(BookDispatchContext);
	const navigate = useNavigate();
	const resetData = {
		title: '',
		author: '',
		publisher: '',
		year: '',
		date: '',
	};
	const [book, setBook] = useState(resetData);

	// 데이터 생성 하기
	const handleContentChange = e => {
		setBook({ ...book, [e.target.name]: e.target.value });
		console.log(book);
	};

	const handleSubmit = () => {
		onCreate(book);
		setBook(resetData);
	};

	return (
		<div className="BookEditor">
			<section>
				<h1>책 정보 수정하기</h1>
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
