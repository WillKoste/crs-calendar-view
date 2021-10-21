import {CalendarTodayOutlined, HomeOutlined} from '@material-ui/icons';

export const navRoutes = [
	{
		text: 'Home',
		icon: <HomeOutlined color='primary' />,
		path: '/'
	},
	{
		text: 'Calendar',
		icon: <CalendarTodayOutlined color='primary' />,
		path: '/calendar'
	}
];
