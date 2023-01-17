import React from 'react';
import { COLORS } from 'styles';

const BookDetail = ({ originData }) => {
	return (
		<>
			<div
				className="bookDetail"
				style={{ backgroundColor: `${COLORS.background}` }}
			>
				<div className="info-group">
					<dl className="info-list">
						<div className="info-item">
							<dt>제목</dt>
							<dd>{originData.title}</dd>
						</div>
						<div className="info-item">
							<dt>지은이</dt>
							<dd>{originData.author}</dd>
						</div>
						<div className="info-item">
							<dt>출판사</dt>
							<dd>{originData.publisher}</dd>
						</div>
						<div className="info-item">
							<dt>발행년도</dt>
							<dd>{originData.year}</dd>
						</div>
						<div className="info-item">
							<dt>한줄평</dt>
							<dd>{originData.comment}</dd>
						</div>
					</dl>
				</div>
				<div className="review">
					{originData.review === '' ? (
						<p style={{ color: '#999', textAlign: 'center' }}>
							작성한 독서록이 없습니다
						</p>
					) : (
						<p>{originData.review}</p>
					)}
				</div>
			</div>
		</>
	);
};

export default BookDetail;
