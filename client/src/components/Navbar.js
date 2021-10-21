import React from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink, withRouter} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import {navRoutes} from './config/routes';

const drawerWidth = 240;

const useStyles = makeStyles({
	root: {
		display: 'flex'
	},
	drawer: {
		width: drawerWidth
	},
	drawerPaper: {
		width: drawerWidth,
		background: '#f4f4f4'
	},
	active: {
		background: '#f4f4f4'
	},
	title: {
		padding: '1rem',
		background: '#333',
		color: '#fff'
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth
	},
	date: {
		flexGrow: 1
	},
	avatar: {
		marginLeft: '1rem'
	},
	listItem: {
		borderBottom: '1px solid #adadad'
	}
});

const Navbar = ({location}) => {
	const {root, drawer, drawerPaper, title, listItem} = useStyles();
	console.log({location});

	return (
		<div className={root}>
			<div>
				<h1>Header</h1>
			</div>
			<Drawer className={drawer} variant='permanent' classes={{paper: drawerPaper}} anchor='left'>
				<div>
					<Typography variant='h5' className={title}>
						CRS Consulting
					</Typography>
				</div>

				<List style={{padding: '0'}}>
					{navRoutes.map((item) => (
						<NavLink to={item.path} key={item.text}>
							<ListItem button key={item.text} style={{borderBottom: '1px solid #adadad', background: location.pathname === item.path ? '#d2d2d2' : 'inherit'}}>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						</NavLink>
					))}
				</List>
			</Drawer>
		</div>
	);
};

export default withRouter(Navbar);
