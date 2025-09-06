import React, { useState } from 'react';
import { useAppStore } from '../store';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const agentMode = useAppStore((s) => s.agentMode);
  const setAgentMode = useAppStore((s) => s.setAgentMode);
  const addChatMessage = useAppStore((s) => s.addChatMessage);

  const handleSend = () => {
    if (!input.trim()) return;
    addChatMessage({ sender: 'user', text: input });
    setInput('');
  };

  return (
    <div className="chat-input">
      <select
        className="mode-select"
        value={agentMode}
        onChange={(e) => setAgentMode(e.target.value)}
      >
        <option value="agent">Agent mode</option>
        <option value="assistant">Assistant mode</option>
      </select>
      <input
        className="message-field"
        placeholder="Write a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="send-btn" onClick={handleSend}>
        ↑
      </button>
    </div>
  );
};

export default ChatInput;
