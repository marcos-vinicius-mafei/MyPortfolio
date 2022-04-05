import { createContext, useContext, useState } from "react";

export const PageContext = createContext();

export const usePage = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const changePage = (next) => {
    if (next > 4 || next < 0) {
      setCurrent(current);
    } else {
      setCurrent(next);
    }
  };

  return (
    <PageContext.Provider
      value={{
        current,
        setCurrent,
        changePage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
