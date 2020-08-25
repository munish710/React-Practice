import React from 'react'

export default function Person({person}) {
    return (
        <div>
            <h2>Hello myself {person.name}. My age is {person.age}</h2>
        </div>
    )
}
