import { Route, Switch } from 'react-router';
import './App.css';
import UserPage from './pages/UserPage';
import Details from './pages/Details';
import GlobalStyle from './styles/reset';
function App() {
	return (
		<>
			<GlobalStyle />
			<Switch>
				<Route path='/' exact={true} component={UserPage} />
				<Route path='/details/:id' component={Details} />
			</Switch>
		</>
	);
}

export default App;
