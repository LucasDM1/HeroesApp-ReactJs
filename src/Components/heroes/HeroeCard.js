import React from 'react'
import { Link } from 'react-router-dom'
import "./HeroeCard.css"

export const HeroeCard = (hero) => {
    return (
        <div className="card m-3" style={{ maxWidth: "540" }}>
            <div className="row no-gutters">

                <img 
                    src={`./assets/heroes/${hero.id}.jpg`} 
                    className="card-img-top" 
                    id="img" 
                    alt={hero.superhero} 
                />

                <div className="card-body">



                    <h5 className="card-title">{hero.superhero}</h5>
                    <p className="card-text">{hero.alter_ego}</p>
                    {
                        (hero.alter_ego !== hero.characters) && <p className="card-text">{hero.characters}</p>
                    }
                    <p className="card-text">
                        <small className="text-muted">{hero.first_appearance}</small>
                    </p>
                    <Link to={`./hero/${hero.id}`}>
                        Mas...
                    </Link>

                </div>
            </div>


        </div>
    )
}
