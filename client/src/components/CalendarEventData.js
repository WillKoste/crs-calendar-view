import React from 'react';

const CalendarEventData = ({event}) => {
	const {title, id, start, end, desc} = event;

	const formatDate = (date) => {
		return new Date(date).toLocaleString('en-US', {dateStyle: 'short', timeStyle: 'short'});
	};

	return (
		<div className='calendar-event-data'>
			<h1 className='header'>{title}</h1>
			<p className='datetime'>
				{formatDate(start)} - {formatDate(end)}
			</p>
			<p className='description'>{desc}</p>
		</div>
	);
};

export default CalendarEventData;
