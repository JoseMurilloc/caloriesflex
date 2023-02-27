import React from 'react';
import {AppProvider} from './providers/AppProviders';
import {Routes} from './routes';

export function App(): JSX.Element {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
