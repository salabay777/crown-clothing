import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_5hMjUGhRQ6JA5rQTO22WHWb200FkyUls9c';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	};

	return(
		<StripeCheckout 
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			planeLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;