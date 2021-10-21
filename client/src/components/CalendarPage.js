import React, {useState} from 'react';
import {Calendar, Views, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import CalendarEvent from './CalendarEvent';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEventData from './CalendarEventData';
const localizer = momentLocalizer(moment);

const CalendarPage = ({}) => {
	const eventData = [
		{
			id: 1,
			title: 'This is the first title',
			start: new Date('10/22/2021 01:34:46 PM'),
			end: new Date('10/22/2021 05:30:00 PM'),
			desc: 'Proin ultrices feugiat elementum. Fusce tempus tellus euismod purus pulvinar luctus. Maecenas dapibus pretium ligula quis tempor. Nam ac ultricies est.'
		},
		{
			id: 2,
			title: 'Build a calendar application',
			start: new Date('10/23/2021 11:45:44 PM'),
			end: new Date('10/24/2021 04:15:00 AM'),
			desc: 'Fusce nec vestibulum mauris. Donec sed mi sem. Cras nisl arcu, consequat eu pharetra eget, pulvinar a dolor. Etiam eu convallis arcu. Integer commodo iaculis finibus. Ut nec lectus ex. Aenean aliquet tristique rhoncus. Suspendisse sed felis nec sem venenatis aliquet id sed dui.'
		},
		{
			id: 3,
			title: 'Go to the park with the dalmatian',
			start: new Date('10/30/2021 10:15:29 AM'),
			end: new Date('10/31/2021 12:00:00 PM'),
			desc: 'Phasellus venenatis eleifend risus eget ornare. Praesent elementum varius nisl, ut congue elit dictum sed.'
		},
		{
			id: 4,
			title: 'Work',
			start: new Date('10/24/2021 10:19:26 AM'),
			end: new Date('10/24/2021 08:00:26 PM'),
			desc: 'Vestibulum sit amet vehicula lacus. Nam interdum dolor eu bibendum elementum. Nam purus sapien, feugiat eu egestas a, rhoncus sit amet nunc. Suspendisse potenti.'
		},
		{
			id: 5,
			title: 'Vacation',
			start: new Date('10/28/2021 01:52:46 PM'),
			end: new Date('10/28/2021 04:00:00 PM'),
			desc: 'In sit amet urna congue tortor sagittis eleifend quis a ipsum. Maecenas placerat aliquam enim, sed sagittis tellus euismod eu. Praesent ullamcorper eros et condimentum posuere.'
		}
	];
	const [currentEvent, setCurrentEvent] = useState(null);

	return (
		<div>
			<h1>My Calendar</h1>
			<div style={{display: 'flex'}}>
				<Calendar
					components={{
						event: CalendarEvent,
						agenda: {
							event: CalendarEvent
						}
					}}
					localizer={localizer}
					events={eventData}
					style={{height: 800, minHeight: 800}}
					className='calendar'
					startAccessor='start'
					endAccessor='end'
					defaultView={Views.MONTH}
					onSelectEvent={(e) => setCurrentEvent(e)}
					step={60}
				/>
				{currentEvent ? <CalendarEventData event={currentEvent} /> : <h1 className='calendar-event-data'>Click on an event to view more!</h1>}
			</div>
		</div>
	);
};

export default CalendarPage;
