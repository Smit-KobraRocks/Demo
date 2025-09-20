import React, { useState } from 'react';
import AppLayout from './components/AppLayout';
import ConnectDatasetPage from './components/connect-dataset/ConnectDatasetPage';
import ChatPage from './components/chat/ChatPage';

const pageComponents = {
  'connect-dataset': ConnectDatasetPage,
  chat: ChatPage,
};

const App = () => {
  const [activePage, setActivePage] = useState('connect-dataset');

  const ActiveComponent = pageComponents[activePage] ?? ConnectDatasetPage;

  const handleNavigate = (pageKey) => {
    if (pageComponents[pageKey]) {
      setActivePage(pageKey);
    }
  };

  return (
    <AppLayout activePage={activePage} onNavigate={handleNavigate}>
      <ActiveComponent />
    </AppLayout>
  );
};

export default App;
