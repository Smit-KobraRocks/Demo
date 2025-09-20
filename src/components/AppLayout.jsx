import React from 'react';
import Sidebar from './Sidebar';

const AppLayout = ({ children, activePage, onNavigate }) => {
  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={onNavigate} />
      <main className="app-main" role="main">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
