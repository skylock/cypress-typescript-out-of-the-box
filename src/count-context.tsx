import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

const CountStateContext = createContext<
  { count: number; setCount: Dispatch<SetStateAction<number>> } | undefined
>(undefined);

type CountProviderProps = {
  children: JSX.Element;
};

function CountProvider({ children }: CountProviderProps) {
  const [count, setCount] = useState(0);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { count, setCount };

  return (
    <CountStateContext.Provider value={value}>{children}</CountStateContext.Provider>
  );
}

function useCount() {
  const context = React.useContext(CountStateContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { CountProvider, useCount };
