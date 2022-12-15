import { Outlet } from 'react-router-dom';
import Header from '../common/Header';

const Root = () => {
	return (
		<div className="Root">
			<Header />
			<Outlet />
		</div>
	);
};

export default Root;
