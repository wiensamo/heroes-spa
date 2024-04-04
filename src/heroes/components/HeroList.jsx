import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    const heroes = useMemo( ()=> getHeroesByPublisher(publisher) , [publisher] );
  return (
    <>
    <h2>lista de heroes</h2>
        <div className="row rows-cols1 row-cols-md-3 g-3" >
           {
            heroes.map( heroe => (
                <HeroCard 
                    key={ heroe.id }
                    { ...heroe}
                />
            ))
           }
        </div>
    </>
  )
}
