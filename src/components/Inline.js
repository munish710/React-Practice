import React from 'react'

export default function Inline() {
    const heading={
        fontSize:'75px',
        color:'red'
    }
    return (
        <div>
            <h1 style={heading}>Inline stylesheet as an object with properties and value as key-value pairs.</h1>
        </div>
    )
}
