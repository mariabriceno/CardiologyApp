import React, {createContext} from 'react';

export const ListContext = createContext(null);

function ListProvider({children, content}) {
  return (
    <ListContext.Provider value={content}>{children}</ListContext.Provider>
  );
}

export default ListProvider;
