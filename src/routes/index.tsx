import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UnauthorizedRoutes} from './unauthorized.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <UnauthorizedRoutes />
    </NavigationContainer>
  );
}
