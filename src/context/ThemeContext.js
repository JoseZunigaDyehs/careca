import React, { useContext } from "react";
import { ThemeProvider as ThemeStyled } from "styled-components";
import themeDefault from "../config/themeDefault";

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
	return (
		<ThemeContext.Provider value={{ theme: themeDefault }}>
			<ThemeStyled theme={themeDefault}>{children}</ThemeStyled>
		</ThemeContext.Provider>
	);
}

function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error(`useTheme must be used within a ThemeProvider`);
	}
	return context;
}

export { ThemeProvider, useTheme };
