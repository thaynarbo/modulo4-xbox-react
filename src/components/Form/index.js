import React from 'react';
import * as Style from './styles';
import Input from './../Input';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLock2Fill } from 'react-icons/ri';
import Button from '../Button';

const Form = () => {
	return (
		<Style.Container>
			<div className='input-container'>
				<Input text='Usuário' icon={<AiOutlineUser />} />
				<Input text='Senha' icon={<RiLock2Fill />} />
			</div>
			<Button text='Entrar' green={true} />
		</Style.Container>
	);
};

export default Form;
