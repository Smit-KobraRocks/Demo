import React from 'react';
import AppLayout from './components/AppLayout';
import ConnectDatasetPage from './components/connect-dataset/ConnectDatasetPage';

const App = () => {
  return (
    <AppLayout>
      <ConnectDatasetPage />
    </AppLayout>
  );
};

export default App;
