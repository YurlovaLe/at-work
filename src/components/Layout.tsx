import React from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderAtWork } from './Header/HeaderAtWork';

export function Layout() {
  return (
    <>
      <HeaderAtWork />
      <Outlet />
    </>
  );
}
