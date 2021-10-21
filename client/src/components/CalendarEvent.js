import React from 'react';

const CalendarEvent = ({event}) => {
	const {title, desc} = event;
	return (
		<span>
			<strong>{title}</strong>
			{desc && `: ${desc}`}
		</span>
	);
};

export default CalendarEvent;
