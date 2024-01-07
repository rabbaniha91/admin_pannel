import React, { useContext, useState, createContext } from "react";

const stateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("dark");
  const [themeSettings, setThemeSettings] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: !isClicked[clicked] });
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        currentColor,
        setColor,
        currentMode,
        setMode,
        themeSettings,
        setThemeSettings,
        screenSize,
        setScreenSize,
        handleClick,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
