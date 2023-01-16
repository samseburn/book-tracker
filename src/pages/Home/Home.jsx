import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { BookDataContext } from 'App';
import { Button, BookList } from 'components';
import LoginForm from 'components/LoginForm/LoginForm';
import { getRecoilBookData } from 'recoil/selector';
import { useRecoilValue } from 'recoil';

const Home = () => {
	const navigate = useNavigate();
	const bookData = useContext(BookDataContext);

	const bookDataValue = useRecoilValue(getRecoilBookData);

	useEffect(() => {
		console.log('recoil@bookDataValue: ', bookDataValue);
	}, []);
	const goNew = () => {
		navigate(`/new`);
	};

	return (
		<>
			<div className="Home">
				<Button colorType={'blue'} onClick={goNew} text={'추가하기'}></Button>
				<BookList bookData={bookData} />
				<LoginForm />
			</div>
		</>
	);
};

export default Home;
