import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components';
import styled from 'styled-components';
import { COLORS, FONT_SIZE, FONT_WEIGHT } from 'styles';

const BookItem = (props) => {
	const navigate = useNavigate();
	const { title, author, review, docID, date } = props;
	const goBook = () => {
		navigate(`/book/${docID}`);
	};

	return (
		<div style={{ margin: '10px' }}>
			<BookDataWrapper>
				<p>{review}</p>

				<div>
					<div>
						<div>
							<strong>{author}</strong>
							<strong>{title}</strong>
						</div>
						<span>{date}</span>
					</div>
					<button onClick={goBook}>+ 보기</button>
				</div>
			</BookDataWrapper>
		</div>
	);
};

const BookDataWrapper = styled.div`
	width: 100%;
	padding: 32px 24px;
	background-color: ${COLORS.pink};
	color: ${COLORS.white};
	border-radius: 16px;

	p {
		display: inline-flex;
		width: 100%;
		font-size: 17px;
		font-weight: ${FONT_WEIGHT.medium};
		line-height: 1.625;
		margin-bottom: 50px;
		/* text-align: justify; */
		/* word-break: keep-all; */
		white-space: pre-line;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;

		div {
			flex-shrink: 0;
			strong {
				margin-right: 5px;
			}

			span {
				font-size: 12px;
				letter-spacing: -0.02em;
			}
		}

		button {
			display: block;
			height: 30px;
			font-weight: ${FONT_WEIGHT.bold};
			cursor: pointer;
		}
	}
`;

export default BookItem;
