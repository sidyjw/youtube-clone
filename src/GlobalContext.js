import React from "react";

export const GlobalContext = React.createContext();

export function GlobalProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(true);

  function closeMenu() {
    setMenuIsOpen(false);
  }

  function openMenu() {
    setMenuIsOpen(true);
  }

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }
  return (
    <GlobalContext.Provider
      value={{ menuIsOpen, closeMenu, openMenu, toggleMenu }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
