import React from 'react';

const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Connect Dataset', href: '#connect-dataset', active: true },
  { label: 'File Upload', href: '#file-upload' },
  { label: 'Coin usage', href: '#coin-usage', badge: '120' },
];

const Sidebar = () => {
  return (
    <aside className="sidebar" aria-label="Primary">
      <div className="sidebar__header">
        <div className="sidebar__brand">PixelGrid</div>
        <p className="sidebar__tagline">Manage, upload, and organise every dataset in one place.</p>
      </div>

      <nav className="sidebar__nav" aria-label="Main navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`sidebar__link${item.active ? ' is-active' : ''}`}
                aria-current={item.active ? 'page' : undefined}
              >
                <span>{item.label}</span>
                {item.badge ? <span className="sidebar__badge">{item.badge}</span> : null}
              </a>
            </li>
          ))}
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
