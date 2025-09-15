import React from 'react';
import Sidebar from './Sidebar';

const AppLayout = ({ children }) => {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main" role="main">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
