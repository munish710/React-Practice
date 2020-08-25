import React from 'react'
import Person from './Person'

export default function NameList() {
    // const names=['bruce','diana','clark']
    // const nameelment=names.map(name=><h2>{name}</h2>)
    const persons=[
        {
            id:1,
            name:'Munish',
            age:21
        },
        {
            id:2,
            name:'sidhant',
            age:21
        },
        {
            id:3,
            name:'Shubham',
            age:21
        }
    ]
//This approach is not considered good of mapping the list in the same component where the lsit is to be rendered.
// Most of the times new component is made to perform operations on list.
const personList=persons.map(person=><Person key={person.id}  person={person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}
