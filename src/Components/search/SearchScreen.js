import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
//import { heroes } from '../../data/heroes'
import { HeroeCard } from '../heroes/HeroeCard';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    //console.log(location.search);
    const {q=''}=queryString.parse(location.search);

    const heroesFiltered = getHeroesByName(q);

    const [formValues, handleInputChange] = useForm({
        search: q
    });

    const { search } = formValues;



    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`)
        //console.log(search)


    }



    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            value={search}
                            name='search'
                            autoComplete="off"
                            onChange={handleInputChange}

                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block mt-1 w-100"
                        >
                            Search
                        </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    
                    {(q==='')&&
                    <div className="alert alert-info">
                        Search your hero
                    </div>}
                    
                    {(q!=='' && heroesFiltered.length=== 0) &&
                    <div className="alert alert-danger">
                        There is not a hero with {q} as a name
                    </div>}

                    {
                        heroesFiltered.map(hero => (
                            <HeroeCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
