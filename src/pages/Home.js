import { db } from '../utils/firebase';
import BookList from '../components/BookList';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { BookDataContext } from '../App';

const Home = () => {
	const navigate = useNavigate();
	const bookData = useContext(BookDataContext);

	const goNew = () => {
		navigate(`/new`);
	};

	return (
		<div className="Home">
			<button onClick={goNew}>추가하기</button>
			<BookList bookData={bookData} />
		</div>
	);
};

export default Home;
