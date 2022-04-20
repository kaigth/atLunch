import { createContext, useContext } from 'react';
import places from './places';
import map from './map';
import sidebar from './sidebar';

export const stores = Object.freeze({
  places: new places(),
  map: new map(),
  sidebar: new sidebar(),
});

const storeContext = createContext(stores);
export const StoreProvider = storeContext.Provider;
export const useStore = store => useContext(storeContext)[store];