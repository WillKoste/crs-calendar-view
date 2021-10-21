import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>The page you are looking for could not be found</h1>
			<Link to='/' className='btn'>
				Return Home
			</Link>
		</div>
	);
};

export default NotFound;
