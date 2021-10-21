import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import CalendarPage from './components/CalendarPage';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<Router>
			<div style={{display: 'flex'}}>
				<div>
					<Navbar />
				</div>
				<div>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/calendar' component={CalendarPage} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
