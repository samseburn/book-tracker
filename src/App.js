import React, { useState, useEffect, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	collection,
	getDocs,
	addDoc,
	doc,
	deleteDoc,
	updateDoc,
} from 'firebase/firestore';
import { db } from './utils/firebase';
import './App.css';

import { Container } from 'common';

import Root from './pages/Root';
import { Home, New, Edit, Book } from './pages';

export const BookDataContext = React.createContext();
export const BookDispatchContext = React.createContext();

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <div>Page Not Found</div>,
		children: [
			{ index: true, element: <Container content={<Home />} /> },
			{ path: '/new', element: <Container content={<New />} /> },
			{ path: '/edit/:bookId', element: <Container content={<Edit />} /> },
			{ path: '/book/:bookId', element: <Container content={<Book />} /> },
		],
	},
]);

function App() {
	// 전체 데이터 관리
	useEffect(() => {
		console.log(db);
	}, []);
	const bookCollection = collection(db, 'books');
	const [bookData, setBookData] = useState([
		{
			title: '',
			author: '',
			publisher: '',
			year: 0,
		},
	]);

	// db 데이터 받아오기
	const getBooks = async () => {
		const data = await getDocs(bookCollection);
		setBookData(data.docs.map((doc) => ({ ...doc.data(), docID: doc.id })));
	};

	useEffect(() => {
		getBooks();
	}, [bookData.length]);

	// CREATE
	const onCreate = async (book) => {
		const newData = {
			title: book.title,
			author: book.author,
			publisher: book.publisher,
			year: book.year,
			date: book.date,
			comment: book.comment,
			review: book.review,
		};

		await addDoc(bookCollection, {
			title: newData.title,
			author: newData.author,
			publisher: newData.publisher,
			year: newData.year,
			date: newData.date,
			comment: book.comment,
			review: book.review,
		});

		setBookData([...bookData, newData]);
	};

	// REMOVE
	const onRemove = async (targetId) => {
		await deleteDoc(doc(bookCollection, targetId));
		getBooks();
	};

	// EDIT
	const onEdit = async (targetId, book) => {
		const updateData = {
			title: book.title,
			author: book.author,
			publisher: book.publisher,
			year: book.year,
			date: book.date,
			comment: book.comment,
			review: book.review,
		};

		await updateDoc(doc(bookCollection, targetId), updateData);
		getBooks();
	};

	// context 최적화
	const memoizedDispatches = useMemo(() => {
		return {
			onCreate,
			onRemove,
			onEdit,
		};
	}, []);

	return (
		<BookDataContext.Provider value={bookData}>
			<BookDispatchContext.Provider value={memoizedDispatches}>
				<RouterProvider router={router} />
			</BookDispatchContext.Provider>
		</BookDataContext.Provider>
	);
}

export default App;
