import React from 'react';
import { useAppStore } from '../store';

const Sidebar = () => {
  const taskGroups = useAppStore((s) => s.taskGroups);

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2 className="logo">h department</h2>
        <div className="sidebar-actions">
          <button className="icon-btn">⚙️</button>
          <button className="icon-btn">+</button>
        </div>
      </div>

      <button className="create-task">Create task</button>

      <div className="tasks-section">
        <h4 className="section-title">Assigned Tasks</h4>
        {taskGroups.map((group) => (
          <div className="task-group" key={group.title}>
            <h5 className="group-title">{group.title}</h5>
            <ul>
              {group.tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-user">
        <div className="avatar">AS</div>
        <span>Adam Smith</span>
      </div>
    </aside>
  );
};

export default Sidebar;
