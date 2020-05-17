import React, {useState} from 'react';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './Signin.scss';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

const Signin = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});

	const handleSubmit = e => {
		e.preventDefault();

		setFormData({
			email: '',
			password: ''
		});
	};

	const {email, password} = formData;

	return(
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput 
					name='email' 
					type="email" 
					handleChange={handleChange}
					value={email} 
					label='email'
					required 
				/>
				<FormInput 
					name='password' 
					type="password" 
					handleChange={handleChange}
					value={password} 
					label='password'
					required 
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default Signin;