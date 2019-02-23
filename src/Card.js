import React from 'react';

const Card = () => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src='https://robohash.org/test?200x200'/>
			<div>
				<h2>Robot name</h2>
				<p>Robot email</p>
			</div>
		</div>
	);
}

export default Card;