import React, { useContext, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { BookDispatchContext } from 'App';
import { Button, Input, Label, Textarea } from 'components';
import { FormInput } from 'components';
import { COLORS, MEDIA } from 'styles';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { bookRecoilData } from 'recoil/atom';

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
	const [bookItemData, setBookItemData] = useRecoilState(bookRecoilData);

	const {
		register,
		watch,
		handleSubmit,
		formState: { isSubmitting, isDirty, errors },
	} = useForm({
		defaultValues: useMemo(() => {
			if (isEdit) {
				return {
					title: originData.title,
					author: originData.author,
					publisher: originData.publisher,
					year: originData.year,
					date: originData.date,
					comment: originData.comment,
					review: originData.review,
				};
			}
			return resetData;
		}),
	});

	// @@ recoil
	// useEffect(() => {
	// 	console.log('책: ', bookItemData);
	// 	setBookItemData({
	// 		title: book.title,
	// 		author: book.author,
	// 		publisher: book.publisher,
	// 		year: book.year,
	// 		date: book.date,
	// 		comment: book.comment,
	// 		review: book.review,
	// 	});
	// }, []);

	// register 객체 확인
	const onValid = (book) => {
		if (
			window.confirm(
				isEdit
					? '독서 정보를 수정하시겠습니까?'
					: '새로운 독서 정보를 만드시겠습니까?',
			)
		) {
			if (!isEdit) {
				onCreate(book);
				setBookItemData({
					title: book.title,
					author: book.author,
					publisher: book.publisher,
					year: book.year,
					date: book.date,
					comment: book.comment,
					review: book.review,
				});
			} else {
				onEdit(bookId, book);
			}
			navigate('/', { replace: true });
		}
	};

	const onInvalid = (data) => console.log(data, 'invalid');

	// watch로 input 값 변경 감지
	// console.log(watch());

	// react-hook-form error
	console.log(errors);

	// 데이터 생성 하기
	// const handleContentChange = (e) => {
	// 	// setBook({ ...book, [e.target.name]: e.target.value });
	// };

	// const handleSubmit = (e) => {
	// 	if (
	// 		window.confirm(
	// 			isEdit
	// 				? '독서 정보를 수정하시겠습니까?'
	// 				: '새로운 독서 정보를 만드시겠습니까?',
	// 		)
	// 	) {
	// 		if (!isEdit) {
	// 			onCreate(book);
	// 		} else {
	// 			onEdit(bookId, book);
	// 		}
	// 		navigate('/', { replace: true });
	// 	}
	// };

	// useEffect(() => {
	// 	if (isEdit) {
	// 		setBook({
	// 			title: originData.title,
	// 			author: originData.author,
	// 			publisher: originData.publisher,
	// 			year: originData.year,
	// 			date: originData.date,
	// 			comment: originData.comment,
	// 			review: originData.review,
	// 		});
	// 	}
	// }, [isEdit, originData]);

	return (
		<BookEditorWrapper>
			<Form onSubmit={handleSubmit(onValid, onInvalid)}>
				<Title>{isEdit ? '책 정보 수정하기' : '새로운 책 등록하기'}</Title>

				<FormInputWrapper>
					<FormInput
						leftChild={<Label text={'제목'} />}
						rightChild={
							<Input
								type={'text'}
								// name={'title'}
								// value={book.title}
								// onChange={handleContentChange}
								aria-invalid={
									!isDirty ? undefined : errors.title ? 'true' : 'false'
								}
								{...register('title', {
									required: '책 제목을 입력해주세요',
									minLength: 1,
								})}
							/>
						}
						bottomChild={
							errors.title && <Small role="alert">{errors.title.message}</Small>
						}
					/>

					<FormInput
						leftChild={<Label text={'저자'} />}
						rightChild={
							<Input
								type={'text'}
								// name={'author'}
								// value={book.author}
								// onChange={handleContentChange}
								aria-invalid={
									!isDirty ? undefined : errors.author ? 'true' : 'false'
								}
								{...register('author', {
									required: '저자를 입력해주세요.',
									minLength: {
										value: 1,
										message: '최소 1글자 이상 입력해주세요.',
									},
								})}
							/>
						}
						bottomChild={
							errors.author && (
								<Small role="alert">{errors.author.message}</Small>
							)
						}
					/>
					<FormInput
						leftChild={<Label text={'출판사'} />}
						rightChild={
							<Input
								type={'text'}
								// name={'publisher'}
								// value={book.publisher}
								// onChange={handleContentChange}
								{...register('publisher', {
									required: '출판사를 입력해주세요.',
									minLength: {
										value: 1,
										message: '최소 1글자 이상 입력해주세요.',
									},
								})}
							/>
						}
						bottomChild={
							errors.publisher && (
								<Small role="alert">{errors.publisher.message}</Small>
							)
						}
					/>
					<FormInput
						leftChild={<Label text={'발행년도'} />}
						rightChild={
							<Input
								type={'text'}
								// name={'year'}
								// value={book.year}
								// onChange={handleContentChange}
								{...register('year', {
									required: '발행년도를 입력해주세요.',
									minLength: {
										value: 1,
										message: '최소 1글자 이상 입력해주세요.',
									},
								})}
							/>
						}
					/>
					{errors.year && <Small role="alert">{errors.year.message}</Small>}
					<FormInput
						leftChild={<Label text={'한줄평'} />}
						rightChild={
							<Input
								type={'text'}
								// name={'comment'}
								// value={book.comment}
								// onChange={handleContentChange}
								{...register('comment', { required: '한줄평을 입력해주세요.' })}
							/>
						}
						bottomChild={
							errors.comment && (
								<Small role="alert">{errors.comment.message}</Small>
							)
						}
					/>

					<FormInput
						leftChild={<Label text={'메모'} />}
						rightChild={
							<Textarea
								// name={'review'}
								// value={book.review}
								// onChange={handleContentChange}
								{...register('review', {
									required: '리뷰를 최소 10자 이상 입력해주세요.',
									minLength: {
										value: 10,
										message: '최소 10자 이상 입력해주세요. ',
									},
								})}
							/>
						}
						bottomChild={
							errors.review && (
								<Small role="alert">{errors.review.message}</Small>
							)
						}
					/>

					<FormInput
						leftChild={<Label text={'등록날짜'} />}
						rightChild={
							<Input
								type={'date'}
								// name={'date'}
								// value={book.date}
								// onChange={handleContentChange}
								{...register('date', { required: '등록 날짜를 설정해주세요.' })}
							/>
						}
						bottomChild={
							errors.date && <Small role="alert">{errors.date.message}</Small>
						}
					/>
				</FormInputWrapper>

				<ButtonWrapper>
					<Button
						type={'button'}
						onClick={() => navigate(-1)}
						text={'뒤로가기'}
					/>
					<Button type={'submit'} btnType={'primary'} text={'저장하기'} />
				</ButtonWrapper>
			</Form>
		</BookEditorWrapper>
	);
};

const Title = styled.h1`
	width: 100%;
	/* padding: 20px 0; */
	text-align: center;
	font-size: 18px;
	line-height: 1.625;
	font-weight: 500;
	margin: 10px 0 12px;
	/* border-bottom: 1px solid gray; */
`;

const ButtonWrapper = styled.div`
	display: flex;
	gap: 20px;
	margin-bottom: 20px;
	padding: 0 20px;
`;

const FormInputWrapper = styled.div`
	padding: 20px;
	margin-bottom: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Form = styled.form`
	width: 100%;
	/* background-color: snow; */
	/* border: 1px solid gray; */
	/* border-radius: 12px; */
	overflow: hidden;
`;

const BookEditorWrapper = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${MEDIA.md} {
		width: 75%;
		max-width: 700px;
	}
`;

const Small = styled.small`
	display: block;
	color: ${COLORS.red};
	font-size: 12px;
	text-align: center;
`;

export default BookEditor;
