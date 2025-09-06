import React, { useState } from 'react';
import { useAppStore } from '../store';

const Sidebar = () => {
  const taskGroups = useAppStore((s) => s.taskGroups);
  const [expanded, setExpanded] = useState(() =>
    taskGroups.map(() => false)
  );

  const toggleGroup = (idx) => {
    setExpanded((prev) => prev.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">Hr. department</h2>
        <div className="header-icons">
          <button className="icon-btn" aria-label="search">
            🔍
          </button>
          <button className="icon-btn" aria-label="add">
            ➕
          </button>
        </div>
      </div>

      <button className="create-task-btn">
        <span className="plus">+</span> Create task
      </button>

      <div className="filter-tabs">
        <button className="tab active">All</button>
        <button className="tab">Pinned</button>
      </div>

      <div className="tasks-wrapper">
        <h4 className="section-label">ASSIGNED TASKS</h4>
        {taskGroups.map((group, idx) => (
          <div className="task-group" key={group.title}>
            <div
              className="group-header"
              onClick={() => toggleGroup(idx)}
            >
              <span className="chevron">{expanded[idx] ? '▾' : '▸'}</span>
              <span className="group-name">{group.title}</span>
            </div>
            {expanded[idx] && (
              <ul className="task-list">
                <li className="task-item active">{group.title}</li>
                {group.tasks.map((t) => (
                  <li key={t} className="task-item">
                    {t}
                  </li>
                ))}
                <li className="task-item create-subtask">
                  <span className="plus">+</span> Create task
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="tasks-wrapper">
        <h4 className="section-label">YOUR TASKS</h4>
      </div>

      <div className="tasks-wrapper">
        <h4 className="section-label">ARCHIVE TASKS</h4>
      </div>

      <div className="sidebar-footer">
        <img
          className="avatar"
          src="https://via.placeholder.com/40"
          alt="Adam Smith"
        />
        <div className="user-info">
          <div className="user-name">Adam Smith</div>
          <div className="user-coins">200 Coins available</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
