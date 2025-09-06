import { create } from 'zustand';

export const useAppStore = create((set) => ({
  agentMode: 'agent',
  chatMessages: [],
  taskGroups: [
    {
      title: 'Finance Trends in India',
      tasks: [
        "India's Financial Landscape",
        'Future of Finance in India',
        'Finance Outlook India',
      ],
    },
    {
      title: 'Finance Trends Report',
      tasks: [
        'Finance tips for beginners',
      ],
    },
  ],
  setAgentMode: (mode) => set({ agentMode: mode }),
  addChatMessage: (msg) =>
    set((state) => ({ chatMessages: [...state.chatMessages, msg] })),
  setTaskGroups: (groups) => set({ taskGroups: groups }),
}));
