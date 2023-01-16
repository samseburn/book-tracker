import { atom } from 'recoil';

export const bookRecoilData = atom({
	key: 'bookRecoilData', // key는 사용하는 atom마다 다르게 -> string
	default: {},
	// 기본값
});
