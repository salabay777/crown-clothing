import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import {setCurrentUser} from './redux/user/userActions';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SigninAndSignup from './pages/sign-in-and-sign-up/SigninAndSignup';

function App({currentUser, setCurrentUser}) {
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
		    	<Route exact path='/signin' render={() => currentUser 
		    		? <Redirect to='/' /> 
		    		: <SigninAndSignup /> 
		    	} />
		    </Switch>
	    </>
    );
}

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);