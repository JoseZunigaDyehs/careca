import React, { useContext, useState } from "react";
// import { TOKEN } from "config/constants";

const AuthContext = React.createContext();
const initialState = () => {
	const user = JSON.parse(
		localStorage.getItem(`saltala_boilerplate_user`) || null
	);
	return user;
};

function AuthProvider({ children }) {
	const [user] = useState(initialState());
	function logIn({ token, user }) {
		// localStorage.setItem(TOKEN, `Bearer ${token}`);
		// localStorage.setItem(`saltala_boilerplate_user`, JSON.stringify(user));
		// return setUser(user);
	}
	function logOut() {
		// localStorage.removeItem(TOKEN);
		// localStorage.removeItem(`saltala_boilerplate_user`);
		// return setUser(null);
	}
	return (
		<AuthContext.Provider value={{ user, logIn, logOut }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error(`useAuth must be used within a AuthProvider`);
	}
	return context;
}

export { AuthProvider, useAuth };
