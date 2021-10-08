import React from 'react';
import * as Style from './styles';
const Button = ({ text, ...props }) => {
	return <Style.Container {...props}>{text}</Style.Container>;
};

export default Button;
