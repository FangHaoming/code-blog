import React from 'react'

export const Col = ({children}) => {
  return (
    <div style={{
      minWidth: 1,
      padding: 10,
      display: 'block',
      lineHeight: 1.72,
      outline: 'none',
      flex: 1,
      border: '1px solid #E7E9E8',
      borderRadius: 6
    }}>
      {children}
    </div>
  )
}

export const Cols = ({children}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      lineHeight: 'inherit',
      outline: 'none',
      gap: 10,
      margin: '20px auto'
    }}>
      {children}
    </div>
  )
}