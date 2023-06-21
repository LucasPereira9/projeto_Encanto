import React from 'react';

const CheckpointContext = React.createContext({});

function CheckpointProvider({children}: any) {
  const [UserCheckpoint, setUserCheckpoint] = React.useState<{
    name: string;
  }>({
    name: '',
  });

  const cleanUserCheckpoint = () => {
    setUserCheckpoint({
      name: '',
    });
  };

  return (
    <CheckpointContext.Provider
      value={{
        UserCheckpoint,
        setUserCheckpoint,
        cleanUserCheckpoint,
      }}>
      {children}
    </CheckpointContext.Provider>
  );
}

function useCheckpoint() {
  const context: any = React.useContext(CheckpointContext);
  return context;
}

export {CheckpointProvider, useCheckpoint};
