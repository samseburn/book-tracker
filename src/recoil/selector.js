import { bookRecoilData } from './atom';
import { selector } from 'recoil';

export const getRecoilBookData = selector({
	key: 'getRecoilBookData', // selector 의 key -> string
	get: ({ get }) => {
		const book = get(bookRecoilData);
		return book;
	},
});
