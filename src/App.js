import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Root from './pages/Root';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Book from './pages/Book';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <div>Page Not Found</div>,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/new', element: <New /> },
			{ path: '/edit/:bookId', element: <Edit /> },
			{ path: '/book/:bookId', element: <Book /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
