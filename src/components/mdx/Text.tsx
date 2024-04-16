import React from 'react'

export const Text = ({ children, color }) => {
  return (
    <span style={{ color: color ?? 'var(--ifm-color-primary)' }}>{children}</span>
  )
}
