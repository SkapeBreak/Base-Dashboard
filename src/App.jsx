import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Home, Profile } from './pages';
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider from './context/AppContextProvider';

function App() {
	return (
		<>
			<AppContextProvider>
				<Router>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/profile' element={<Profile />} />
					</Routes>
				</Router>
			</AppContextProvider>
			<ToastContainer />
		</>
	);
}

export default App;
