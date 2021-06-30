import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard'

export const HeroesList = ({ publisher }) => {

   const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    //const heroes = getHeroesByPublisher(publisher)

    

    return (
        <div className="row row-cols-6 d-flex justify-content-center animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroeCard key={hero.id} {...hero} />

                ))
            }
        </div>
    )
}
