import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './reducers/index';
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, reducers);
const storeCreator = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
export default storeCreator;
