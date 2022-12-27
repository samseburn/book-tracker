import { Header } from 'common';

const Container = ({ content }) => {
	return (
		<div className="container">
			<Header />
			<div className="content-container">
				<div className="contents">{content}</div>
			</div>
		</div>
	);
};

export default Container;
