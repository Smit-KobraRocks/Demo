import React, { useEffect, useRef, useState } from 'react';

const RowActionMenu = ({ onDownload = () => {}, onRemove = () => {} }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div className="action-menu" ref={menuRef}>
      <button
        type="button"
        className="action-menu__trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Open actions menu"
        onClick={() => setOpen((value) => !value)}
      >
        ⋮
      </button>
      {open ? (
        <div className="action-menu__dropdown" role="menu">
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onDownload();
            }}
          >
            Download this file
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onRemove();
            }}
          >
            Remove this file
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default RowActionMenu;
