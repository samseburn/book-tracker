import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
	// useForm 훅 사용하여 객체 함수 가져오기
	const {
		register, // 폼 유효성 제출 메소드
		handleSubmit, // 폼 제출 함수
		watch, // 실시간 폼 입력값 확인 == e.target.value
		formState: { isSubmitting, isDirty, isValid, errors }, // 중복 제출 방지
	} = useForm({ mode: 'onchange' });

	// 당연히 이메일과 비밀번호는 모두 필수 입력이겠죠?
	// 이메일 경우에는 유효한 형식이 있을 것이고,
	// 비밀번호의 경우 최소한의 길이가 있다고 가정해보겠습니다.
	const onSubmit = async (data) => {
		await new Promise((r) => setTimeout(r, 1000));
		alert(JSON.stringify(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor={'email'}>이메일</label>
				<input
					type={'text'}
					id={'email'}
					name={'email'}
					placeholder={'이메일을 입력하세요'}
					aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
					{...register('email', {
						required: '이메일은 필수 입력입니다.',
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: '이메일 형식에 맞지 않습니다.',
						},
					})}
				/>
				{errors.email && <small role={'alert'}>{errors.email.message}</small>}
			</div>
			<div>
				<label htmlFor={'password'}>비밀번호</label>
				<input
					type={'password'}
					id={'password'}
					name={'password'}
					placeholder={'비밀번호를 입력하세요'}
					aria-invalid={
						!isDirty ? undefined : errors.password ? 'true' : 'false'
					}
					{...register('password', {
						required: '비밀번호는 필수 입력입니다.',
						minLength: {
							value: 8,
							message: '8자리 이상 비밀번호를 사용하세요.',
						},
					})}
				/>
				{errors.password && (
					<small role={'alert'}>{errors.password.message}</small>
				)}
			</div>
			<button type={'submit'} disabled={isSubmitting}>
				로그인
			</button>
		</form>
	);
};

export default LoginForm;
