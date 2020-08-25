import React from 'react'
//{heroname} desconstructing the props
function Hero({heroName}) {
    if(heroName==="Joker"){
        throw new Error("Not a Hero")
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
