import React from 'react';

const navItems = [
  { label: 'Profile', key: 'profile', disabled: true },
  { label: 'Connect Dataset', key: 'connect-dataset' },
  { label: 'Chat', key: 'chat' },
  { label: 'File Upload', key: 'file-upload', disabled: true },
  { label: 'Coin usage', key: 'coin-usage', badge: '120', disabled: true },
];

const Sidebar = ({ activePage, onNavigate }) => {
  return (
    <aside className="sidebar" aria-label="Primary">
      <div className="sidebar__header">
        <div className="sidebar__brand">PixelGrid</div>
        <p className="sidebar__tagline">Manage, upload, and organise every dataset in one place.</p>
      </div>

      <nav className="sidebar__nav" aria-label="Main navigation">
        <ul>
          {navItems.map((item) => {
            const isActive = item.key === activePage;

            return (
              <li key={item.key}>
                <button
                  type="button"
                  className={`sidebar__link${isActive ? ' is-active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => {
                    if (!item.disabled) {
                      onNavigate?.(item.key);
                    }
                  }}
                  disabled={item.disabled}
                >
                  <span>{item.label}</span>
                  {item.badge ? <span className="sidebar__badge">{item.badge}</span> : null}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <button type="button" className="sidebar__back-btn">
          <span aria-hidden="true">←</span>
          Back to Home
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
