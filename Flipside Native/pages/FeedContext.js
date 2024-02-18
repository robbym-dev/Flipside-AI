import React, { createContext, useState, useContext } from 'react';

const FeedContext = createContext();

export const useFeed = () => useContext(FeedContext);

export const FeedProvider = ({ children }) => {
  const [feedId, setFeedId] = useState(0);

  return (
    <FeedContext.Provider value={{ feedId, setFeedId }}>
      {children}
    </FeedContext.Provider>
  );
};
