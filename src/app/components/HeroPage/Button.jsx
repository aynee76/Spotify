import React from 'react'
import './Button.css'

export const Button = ({className, children}) => {
    return (
        <button className={className}>
            {children}
        </button>
    )
}