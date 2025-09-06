import React from 'react';
import Sidebar from './components/Sidebar';
import MainView from './components/MainView';
import ChatInput from './components/ChatInput';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <MainView />
        <ChatInput />
      </div>
    </div>
  );
};

export default App;
