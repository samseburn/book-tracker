import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './utils/firebase';
import './App.css';

import Root from './pages/Root';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Book from './pages/Book';

export const BookDataContext = React.createContext();

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <div>Page Not Found</div>,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/new', element: <New /> },
			{ path: '/edit/:bookId', element: <Edit /> },
			{ path: '/book/', element: <Book /> },
		],
	},
]);

function App() {
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
		setBookData(data.docs.map(doc => ({ ...doc.data(), docID: doc.id })));
		// console.log(bookData);
	};

	useEffect(() => {
		getBooks();
		console.log(bookData);
	}, []);
	return (
		<BookDataContext.Provider value={bookData}>
			<RouterProvider router={router} />
		</BookDataContext.Provider>
	);
}

export default App;
