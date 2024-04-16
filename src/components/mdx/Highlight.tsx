import React from 'react';

export function Highlight({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color ?? 'var(--ifm-navbar-search-input-background-color)',
        borderRadius: '2px',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}