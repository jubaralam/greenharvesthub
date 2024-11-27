import React, { createContext } from 'react';

// Create the Context
const UrlContext = createContext("http://localhost:8080/api");

const BaseURLProvider = ({ children }) => {
  const baseURL = "http://localhost:8080/api";

  return (
    <UrlContext.Provider value={baseURL}>
      {children}
    </UrlContext.Provider>
  );
};

export { UrlContext, BaseURLProvider };
