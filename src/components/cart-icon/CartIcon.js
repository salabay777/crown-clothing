import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cartActions';

import {ReactComponent as ShoppingItem} from '../../assets/shopping-bag.svg';

import './CartIcon.scss';

const CartIcon = ({toggleCartHidden}) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingItem className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
);

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);