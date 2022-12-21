import React, { createContext, useEffect, useState } from "react";

export const MyLoader = createContext();
const LoaderContext = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <MyLoader.Provider value={{ loading, setLoading }}>
      {children}
    </MyLoader.Provider>
  );
};

export default LoaderContext;
