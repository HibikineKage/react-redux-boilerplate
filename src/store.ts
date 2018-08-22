import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers/index';

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, reducers);
const storeCreator = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
export default storeCreator;
