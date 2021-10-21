import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import CalendarPage from './components/CalendarPage';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

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
						<Route exact component={NotFound} />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
