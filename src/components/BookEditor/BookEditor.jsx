import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookDispatchContext } from '../../App';
import { Button, Input, Label } from 'components';
import './BookEditor.scss';
import FormInput from 'components/Molecule/FormInput/FormInput';
import { type } from '@testing-library/user-event/dist/type';
import { COLORS } from 'styles';

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
		comment: '',
		review: '',
	};
	const [book, setBook] = useState(resetData);

	// 데이터 생성 하기
	const handleContentChange = (e) => {
		setBook({ ...book, [e.target.name]: e.target.value });
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
				comment: originData.comment,
				review: originData.review,
			});
		}
	}, [isEdit, originData]);

	return (
		<div className="BookEditor">
			<section>
				<h1>{isEdit ? '책 정보 수정하기' : '새로운 책 등록하기'}</h1>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<FormInput
						leftChild={<Label text={'제목'} />}
						rightChild={
							<Input
								type={'text'}
								name={'title'}
								value={book.title}
								onChange={handleContentChange}
							/>
						}
					/>
					<FormInput
						leftChild={<Label text={'저자'} />}
						rightChild={
							<Input
								type={'text'}
								name={'author'}
								value={book.author}
								onChange={handleContentChange}
							/>
						}
					/>
					<FormInput
						leftChild={<Label text={'출판사'} />}
						rightChild={
							<Input
								type={'text'}
								name={'publisher'}
								value={book.publisher}
								onChange={handleContentChange}
							/>
						}
					/>
					<FormInput
						leftChild={'발행년도'}
						rightChild={
							<Input
								type={'text'}
								name={'year'}
								value={book.year}
								onChange={handleContentChange}
							/>
						}
					/>
					<FormInput
						leftChild={'한줄평'}
						rightChild={
							<Input
								type={'text'}
								name={'comment'}
								value={book.comment}
								onChange={handleContentChange}
							/>
						}
					/>
					<FormInput
						leftChild={'메모'}
						rightChild={
							<textarea
								style={{
									background: 'white',
									width: '100%',
									height: '100px',
									padding: '4px 16px',
									whiteSpace: 'wrap',
									border: '1px solid gray',
									outline: 'none',
									resize: 'none',
								}}
								name={'review'}
								value={book.review}
								wrap={'hard'}
								onChange={handleContentChange}
							/>
						}
					/>

					<div>
						<label>등록날짜:</label>
						<Input
							type={'date'}
							name={'date'}
							value={book.date}
							onChange={handleContentChange}
						/>
					</div>
				</div>
				<div className="button-group">
					<Button onClick={() => navigate(-1)}>뒤로가기</Button>
					<Button onClick={handleSubmit}>저장하기</Button>
				</div>
			</section>
		</div>
	);
};

export default BookEditor;
