import React from 'react'

export const ContentCard = ({image, children, desc}) => {
    return (
        <div className='card'>
            <img src={image} alt="" />
            <p>{children}</p>
            <p>{desc}</p>
        </div>
    )
}