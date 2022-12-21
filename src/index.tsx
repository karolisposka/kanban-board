import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './Router';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import NotificationProvider from './pages/NotificationProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NotificationProvider>
          <Router />
        </NotificationProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
