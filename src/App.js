import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import {setCurrentUser} from './redux/user/userActions';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SigninAndSignup from './pages/sign-in-and-sign-up/SigninAndSignup';

function App({setCurrentUser}) {
	let unsubscribeFromAuth = null;

	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else{
				setCurrentUser(userAuth);
			}
		});
	}, []);

	useEffect(() => {
		return () => {
			unsubscribeFromAuth();
		};
	}, []);

    return (
	  	<>
	  		<Header />
		    <Switch>
		    	<Route exact path ='/' component={HomePage} />
		    	<Route path='/shop' component={ShopPage} />
		    	<Route path='/signin' component={SigninAndSignup} />
		    </Switch>
	    </>
    );
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);