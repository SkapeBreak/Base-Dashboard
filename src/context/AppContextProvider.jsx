import React, { useState, useEffect, createContext } from 'react';
// import axios from 'axios';

export const appContext = createContext();

const AppContextProvider = ({ children }) => {
	const [extended, setExtended] = useState(true);
	const toggleNav = () => {
		setExtended(!extended);
	};
	const appStates = {
		extended,
		toggleNav,
	};
	return (
		<appContext.Provider value={appStates}>{children}</appContext.Provider>
	);
};
export default AppContextProvider;
